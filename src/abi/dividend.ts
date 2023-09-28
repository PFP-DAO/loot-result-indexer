import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './dividend.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Claim: new LogEvent<([user: string, roleId: number, amount: bigint, batch: bigint] & {user: string, roleId: number, amount: bigint, batch: bigint})>(
        abi, '0x2ed6c78378ef6d205067eb119d9472fdafd3dd6e819d3a3c80b89c81e04f26da'
    ),
}

export class Contract extends ContractBase {
}
