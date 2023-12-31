import { TypeormDatabase } from "@subsquid/typeorm-store";
import {
  Claim,
  ClaimLog,
  GuarResult,
  LevelResult,
  LootInfo,
  LootResult,
  PayLoot,
} from "./model";
import {
  commonPoolAddress,
  dividendAddress,
  processor,
  upPoolAddress,
} from "./processor";
import * as lootAbi from "./abi/loot";
import * as roleAbi from "./abi/role";
import * as dividendAbi from "./abi/dividend";

type validLogsGroupByTxHash = {
  address: string;
  hash: string;
  logs: {
    topics: string[];
    data: string;
  }[];
};

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  const lootInfos: LootInfo[] = [];
  let claimInfos: Map<string, ClaimLog> = new Map();
  for (let block of ctx.blocks) {
    // claim
    for (let log of block.logs) {
      if (
        log.address === dividendAddress.toLocaleLowerCase() &&
        log.topics[0] === dividendAbi.events.Claim.topic
      ) {
        let { user, roleId, amount, batch } =
          dividendAbi.events.Claim.decode(log);
        const hash = log.transaction?.hash!;
        claimInfos.set(
          hash,
          new ClaimLog({
            id: hash,
            block: block.header.height,
            timestamp: new Date(block.header.timestamp),
            user,
            roleId,
            amount,
            batch,
          })
        );
      }
    }
    if (claimInfos.size > 0) {
      console.log(
        `Add ${claimInfos.size} claimInfos to database at block ${block.header.height}`
      );
      await ctx.store.upsert([...claimInfos.values()]);
    }

    // loot
    const validLogs = block.logs.filter(
      (log) =>
        (log.topics[0] === lootAbi.events.PayLoot.topic ||
          log.topics[0] === lootAbi.events.LootResult.topic ||
          log.topics[0] === lootAbi.events.GuarResult.topic ||
          log.topics[0] === dividendAbi.events.Claim.topic ||
          log.topics[0] === roleAbi.events.LevelResult.topic) &&
        (log.transaction?.to === upPoolAddress.toLowerCase() ||
          log.transaction?.to === commonPoolAddress.toLowerCase())
    );
    if (validLogs.length === 0) continue;

    const logsMap = new Map<string, validLogsGroupByTxHash>();

    validLogs.forEach((log) => {
      const txHash = log.transaction?.hash!;

      if (!logsMap.has(txHash)) {
        logsMap.set(txHash, {
          address: log.address,
          hash: txHash,
          logs: [],
        });
      }

      logsMap.get(txHash)?.logs.push({
        topics: log.topics,
        data: log.data,
      });
    });

    const dataSource = [...logsMap.values()];

    if (dataSource.length === 0) continue;

    for (let data of logsMap.values()) {
      // LootResult
      const lootResults = data.logs
        .filter((log) => log.topics[0] === lootAbi.events.LootResult.topic)
        .map((log) => lootAbi.events.LootResult.decode(log))
        .map(
          (data) =>
            new LootResult({
              slot: data[1],
              balance: Number(data[2]),
            })
        );

      // GuarResult
      const guarResultlog = data.logs.filter(
        (log) => log.topics[0] === lootAbi.events.GuarResult.topic
      )[0];
      const decodeGuar = lootAbi.events.GuarResult.decode(guarResultlog);
      const guarResult = new GuarResult({
        user: decodeGuar[0],
        newSSGuar: Number(decodeGuar[1]),
        newSSSGuar: Number(decodeGuar[2]),
        isUpSSS: decodeGuar[3],
      });

      // PayLoot
      const payLootlog = data.logs.find(
        (log) => log.topics[0] === lootAbi.events.PayLoot.topic
      );
      const payLootData =
        payLootlog && lootAbi.events.PayLoot.decode(payLootlog);
      const payLoot = payLootData
        ? new PayLoot({
            amount: payLootData[1],
            usdc: payLootData[2],
          })
        : undefined;
      const captainId = payLootData ? Number(payLootData.captainId) : 1;

      // LevelResult
      const levelResultlog = data.logs.find(
        (log) => log.topics[0] === roleAbi.events.LevelResult.topic
      );
      const levelResultData =
        levelResultlog && roleAbi.events.LevelResult.decode(levelResultlog);
      const levelResult = levelResultData
        ? new LevelResult({
            nftId: levelResultData[0],
            newLevel: Number(levelResultData[1]),
            newExp: Number(levelResultData[2]),
          })
        : undefined;

      // Claim
      const claimlog = data.logs.find(
        (log) => log.topics[0] === dividendAbi.events.Claim.topic
      );
      const claimData = claimlog && dividendAbi.events.Claim.decode(claimlog);
      const claim = claimData
        ? new Claim({
            amount: claimData[2],
            batch: claimData[3],
          })
        : undefined;

      const newLoot = new LootInfo({
        id: data.hash,
        timestamp: BigInt(block.header.timestamp / 1000),
        user: guarResult.user,
        captainId,
        payLoot,
        guarResult,
        levelResult,
        lootResults,
        claim,
        pool: data.address,
      });
      lootInfos.push(newLoot);
      ctx.log.info(`New loot: ${data.hash}`);
    }
    console.log(
      `Add ${dataSource.length} lootInfos to database at block ${block.header.height}`
    );
  }

  await ctx.store.upsert(lootInfos);
});
