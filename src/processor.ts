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

const isTestnet = false;
const fromBlock = isTestnet ? 41014524 : 42933111;

export const commonPoolAddress = isTestnet
  ? "0xa211D9cB24FE7e82cC9b03E7B724ECB7687b7021"
  : "0x0FAF09eD08D2Ec65982088f12E3Bab7e7Cb2945f"; // common pool
export const upPoolAddress = isTestnet
  ? "0x007d572f28b4f7c1cee908b589062d3989e80234"
  : "0xE9728Ed5E1FD05665C44a17082d77049801435f0"; // up pool
export const roleAddress = isTestnet
  ? "0xeb0780592e3c719c860d4C72F873daCe4FEA3386"
  : "0xbE0A8ce3Ca98d5806B7f8dA015eaBcFb4738592A"; // role
export const dividendAddress = isTestnet
  ? "0x24291D6c51f6Cc45C2dC3C8Ee5684FA81BDC82A6"
  : "0x1439d7daD45C248D94Dd553f0C02FDA8F1f54676"; // dividend

const rpc = isTestnet
  ? `https://rpc.ankr.com/polygon_mumbai`
  : `https://polygon-rpc.com`;
const network = isTestnet ? "polygon-mumbai" : "polygon";

export const processor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive(network, { release: "ArrowSquid" }),
    chain: rpc,
  })
  .setFinalityConfirmation(150)
  .setFields({
    transaction: {
      from: true,
      value: true,
      hash: true,
    },
  })
  .setBlockRange({
    from: fromBlock,
  })
  .addLog({
    address: [
      commonPoolAddress, // common pool
      upPoolAddress, // up pool
      roleAddress, // role
      dividendAddress, // dividend
    ],
    topic0: [
      lootAbi.events.PayLoot.topic, // PayLoot
      dividendAbi.events.Claim.topic, // Claim
      lootAbi.events.LootResult.topic, // LootResult
      lootAbi.events.GuarResult.topic, // GuarResult
      roleAbi.events.LevelResult.topic, // LevelResult
    ],
    transaction: true,
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
