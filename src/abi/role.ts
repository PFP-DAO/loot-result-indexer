import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './role.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    LevelResult: new LogEvent<([nftId: bigint, newLevel: number, newExp: number] & {nftId: bigint, newLevel: number, newExp: number})>(
        abi, '0x5ae10ab8aa0e01ec0921847848f1e86127475aaa6a5c8904291df2ee61779f6d'
    ),
}

export class Contract extends ContractBase {
}
