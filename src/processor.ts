import { lookupArchive } from "@subsquid/archive-registry";
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor";
import * as lootAbi from "./abi/loot";
import * as roleAbi from "./abi/role";
import * as dividendAbi from "./abi/dividend";

export const processor = new EvmBatchProcessor()
  .setDataSource({
    // Change the Archive endpoints for run the squid
    // against the other EVM networks
    // For a full list of supported networks and config options
    // see https://docs.subsquid.io/evm-indexing/
    archive: lookupArchive("polygon"),

    // Must be set for RPC ingestion (https://docs.subsquid.io/evm-indexing/evm-processor/)
    // OR to enable contract state queries (https://docs.subsquid.io/evm-indexing/query-state/)
    chain: "https://rpc.ankr.com/polygon",
  })
  .setFinalityConfirmation(120)
  .setFields({
    transaction: {
      from: true,
      value: true,
      hash: true,
    },
  })
  .setBlockRange({
    from: 46995372,
  })
  .addLog({
    address: [
      "0x0FAF09eD08D2Ec65982088f12E3Bab7e7Cb2945f", // common pool
      "0xE9728Ed5E1FD05665C44a17082d77049801435f0", // up pool
      "0xbE0A8ce3Ca98d5806B7f8dA015eaBcFb4738592A", // role
      "0x1439d7daD45C248D94Dd553f0C02FDA8F1f54676", // dividend
    ],
    topic0: [
      lootAbi.events.PayLoot.topic, // PayLoot
      dividendAbi.events.Claim.topic, // Claim
      lootAbi.events.LootResult.topic, // LootResult
      lootAbi.events.GuarResult.topic, // GuarResult
      roleAbi.events.LevelResult.topic, // LevelResult
    ],
    transaction: true,
  })
  .setFields({
    log: {
      topics: true,
    },
    transaction: {
      input: true,
    },
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
