import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './loot.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AdminChanged: new LogEvent<([previousAdmin: string, newAdmin: string] & {previousAdmin: string, newAdmin: string})>(
        abi, '0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f'
    ),
    BeaconUpgraded: new LogEvent<([beacon: string] & {beacon: string})>(
        abi, '0x1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e'
    ),
    GuarResult: new LogEvent<([user: string, newSSGuar: number, newSSSGuar: number, isUpSSS: boolean] & {user: string, newSSGuar: number, newSSSGuar: number, isUpSSS: boolean})>(
        abi, '0xc8663b4f45098797015e0de46b1ca26d6ee4d5550ad7d0314a5b386526ea6a97'
    ),
    Initialized: new LogEvent<([version: number] & {version: number})>(
        abi, '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'
    ),
    LootResult: new LogEvent<([user: string, slot: bigint, balance: number] & {user: string, slot: bigint, balance: number})>(
        abi, '0x40012734b347680fe28d9a0969a9a9aba2694c5b3e7c7381d0bb79fd3c09d228'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    PayLoot: new LogEvent<([user: string, amount: bigint, usdc: boolean, captainId: number] & {user: string, amount: bigint, usdc: boolean, captainId: number})>(
        abi, '0x6f1c018aa10ae65f69c1f832cb20b314ae92069f756de7282688585516c52a7c'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    activeNonce: new Func<[], {}, number>(
        abi, '0x2ba9ead3'
    ),
    dailyDivide: new Func<[roleIds_: Array<number>, roleIdPoolBalanceToday_: Array<bigint>], {roleIds_: Array<number>, roleIdPoolBalanceToday_: Array<bigint>}, []>(
        abi, '0x5414ea24'
    ),
    dividend: new Func<[], {}, string>(
        abi, '0x0ff8cf9b'
    ),
    equipmentNFT: new Func<[], {}, string>(
        abi, '0x962e0a16'
    ),
    getGuarInfo: new Func<[user_: string], {user_: string}, [_: number, _: number, _: boolean]>(
        abi, '0x9992914a'
    ),
    getLatestPrice: new Func<[], {}, bigint>(
        abi, '0x8e15f473'
    ),
    getnSIdsLength: new Func<[], {}, bigint>(
        abi, '0xadc96e8a'
    ),
    getnSSIdsLength: new Func<[], {}, bigint>(
        abi, '0xd3e90871'
    ),
    getnSSSIdsLength: new Func<[], {}, bigint>(
        abi, '0x8332bf01'
    ),
    getupSSIdsLength: new Func<[], {}, bigint>(
        abi, '0xe1095a96'
    ),
    initialize: new Func<[equipmentAddress_: string, roleNFTAddress_: string], {equipmentAddress_: string, roleNFTAddress_: string}, []>(
        abi, '0x485cc955'
    ),
    isWhitelistLooted: new Func<[_: string], {}, number>(
        abi, '0xf16dfb19'
    ),
    'loot1(uint16,uint256,bool)': new Func<[captainId_: number, nftId_: bigint, usdc_: boolean], {captainId_: number, nftId_: bigint, usdc_: boolean}, []>(
        abi, '0xac3073cf'
    ),
    'loot1(bool)': new Func<[usdc_: boolean], {usdc_: boolean}, []>(
        abi, '0xc013f579'
    ),
    'loot10(bool)': new Func<[usdc_: boolean], {usdc_: boolean}, []>(
        abi, '0x0544ca24'
    ),
    'loot10(uint16,uint256,bool)': new Func<[captainId_: number, nftId_: bigint, usdc_: boolean], {captainId_: number, nftId_: bigint, usdc_: boolean}, []>(
        abi, '0xd5d5331b'
    ),
    mintTimesForSSS: new Func<[_: string], {}, number>(
        abi, '0xad6b3354'
    ),
    mintTimesForUpSS: new Func<[_: string], {}, number>(
        abi, '0xa9d4edd4'
    ),
    nSIds: new Func<[_: bigint], {}, number>(
        abi, '0xcd6e3c63'
    ),
    nSSIds: new Func<[_: bigint], {}, number>(
        abi, '0x8cdad655'
    ),
    nSSSIds: new Func<[_: bigint], {}, number>(
        abi, '0x75274ac0'
    ),
    nextIsUpSSS: new Func<[_: string], {}, boolean>(
        abi, '0x9b7698fc'
    ),
    oldFreeLooted: new Func<[_: string], {}, boolean>(
        abi, '0xa6e4ab6b'
    ),
    oldRoleIdPoolBalance: new Func<[_: number], {}, bigint>(
        abi, '0x2473d754'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    priceLootOne: new Func<[], {}, bigint>(
        abi, '0xba471d53'
    ),
    priceLootTen: new Func<[], {}, bigint>(
        abi, '0xcf80194d'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
    ),
    relayer: new Func<[], {}, string>(
        abi, '0x8406c079'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    roleNFT: new Func<[], {}, string>(
        abi, '0xc597949c'
    ),
    router: new Func<[], {}, string>(
        abi, '0xf887ea40'
    ),
    setActiveNonce: new Func<[nonce_: number], {nonce_: number}, []>(
        abi, '0xb596aee5'
    ),
    setDividend: new Func<[dividend_: string], {dividend_: string}, []>(
        abi, '0xe280c611'
    ),
    setFeed: new Func<[oracle_: string], {oracle_: string}, []>(
        abi, '0x55b775ea'
    ),
    setPriceLootOne: new Func<[price_: bigint], {price_: bigint}, []>(
        abi, '0x4bb6a09f'
    ),
    setPriceLootTen: new Func<[price_: bigint], {price_: bigint}, []>(
        abi, '0x68692df2'
    ),
    setRelayer: new Func<[relayer_: string], {relayer_: string}, []>(
        abi, '0x6548e9bc'
    ),
    setSigner: new Func<[signer_: string], {signer_: string}, []>(
        abi, '0x6c19e783'
    ),
    setStyleVariantManager: new Func<[variantManager_: string], {variantManager_: string}, []>(
        abi, '0x053a8740'
    ),
    setSwapRouter: new Func<[router_: string], {router_: string}, []>(
        abi, '0x41273657'
    ),
    setTreasury: new Func<[treasury_: string], {treasury_: string}, []>(
        abi, '0xf0f44260'
    ),
    setUSDC: new Func<[usdc_: string], {usdc_: string}, []>(
        abi, '0xb3e089a2'
    ),
    setUseNewPrice: new Func<[useNewPrice_: boolean], {useNewPrice_: boolean}, []>(
        abi, '0xcdc62b52'
    ),
    setWETH: new Func<[weth_: string], {weth_: string}, []>(
        abi, '0x5b769f3c'
    ),
    setnSIds: new Func<[nSIds_: Array<number>], {nSIds_: Array<number>}, []>(
        abi, '0x66aa64b1'
    ),
    setnSSIds: new Func<[nSSIds_: Array<number>], {nSSIds_: Array<number>}, []>(
        abi, '0xc606fb9c'
    ),
    setnSSSIds: new Func<[nSSSIds_: Array<number>], {nSSSIds_: Array<number>}, []>(
        abi, '0x8d2234ff'
    ),
    setupSSIds: new Func<[upSSIds_: Array<number>], {upSSIds_: Array<number>}, []>(
        abi, '0x7b136997'
    ),
    setupSSSId: new Func<[upSSSId_: number], {upSSSId_: number}, []>(
        abi, '0xb50973e8'
    ),
    signer: new Func<[], {}, string>(
        abi, '0x238ac933'
    ),
    styleVariantManager: new Func<[], {}, string>(
        abi, '0xa89ba2c7'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    treasury: new Func<[], {}, string>(
        abi, '0x61d027b3'
    ),
    upSSIds: new Func<[_: bigint], {}, number>(
        abi, '0x85da8bce'
    ),
    upSSSId: new Func<[], {}, number>(
        abi, '0xe6201bb1'
    ),
    upgradeTo: new Func<[newImplementation: string], {newImplementation: string}, []>(
        abi, '0x3659cfe6'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
    usdc: new Func<[], {}, string>(
        abi, '0x3e413bee'
    ),
    weth: new Func<[], {}, string>(
        abi, '0x3fc8cef3'
    ),
    whitelistLoot: new Func<[time_: number, signature_: string], {time_: number, signature_: string}, []>(
        abi, '0x82065d2b'
    ),
    withdraw: new Func<[], {}, []>(
        abi, '0x3ccfd60b'
    ),
}

export class Contract extends ContractBase {

    activeNonce(): Promise<number> {
        return this.eth_call(functions.activeNonce, [])
    }

    dividend(): Promise<string> {
        return this.eth_call(functions.dividend, [])
    }

    equipmentNFT(): Promise<string> {
        return this.eth_call(functions.equipmentNFT, [])
    }

    getGuarInfo(user_: string): Promise<[_: number, _: number, _: boolean]> {
        return this.eth_call(functions.getGuarInfo, [user_])
    }

    getLatestPrice(): Promise<bigint> {
        return this.eth_call(functions.getLatestPrice, [])
    }

    getnSIdsLength(): Promise<bigint> {
        return this.eth_call(functions.getnSIdsLength, [])
    }

    getnSSIdsLength(): Promise<bigint> {
        return this.eth_call(functions.getnSSIdsLength, [])
    }

    getnSSSIdsLength(): Promise<bigint> {
        return this.eth_call(functions.getnSSSIdsLength, [])
    }

    getupSSIdsLength(): Promise<bigint> {
        return this.eth_call(functions.getupSSIdsLength, [])
    }

    isWhitelistLooted(arg0: string): Promise<number> {
        return this.eth_call(functions.isWhitelistLooted, [arg0])
    }

    mintTimesForSSS(arg0: string): Promise<number> {
        return this.eth_call(functions.mintTimesForSSS, [arg0])
    }

    mintTimesForUpSS(arg0: string): Promise<number> {
        return this.eth_call(functions.mintTimesForUpSS, [arg0])
    }

    nSIds(arg0: bigint): Promise<number> {
        return this.eth_call(functions.nSIds, [arg0])
    }

    nSSIds(arg0: bigint): Promise<number> {
        return this.eth_call(functions.nSSIds, [arg0])
    }

    nSSSIds(arg0: bigint): Promise<number> {
        return this.eth_call(functions.nSSSIds, [arg0])
    }

    nextIsUpSSS(arg0: string): Promise<boolean> {
        return this.eth_call(functions.nextIsUpSSS, [arg0])
    }

    oldFreeLooted(arg0: string): Promise<boolean> {
        return this.eth_call(functions.oldFreeLooted, [arg0])
    }

    oldRoleIdPoolBalance(arg0: number): Promise<bigint> {
        return this.eth_call(functions.oldRoleIdPoolBalance, [arg0])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    priceLootOne(): Promise<bigint> {
        return this.eth_call(functions.priceLootOne, [])
    }

    priceLootTen(): Promise<bigint> {
        return this.eth_call(functions.priceLootTen, [])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    relayer(): Promise<string> {
        return this.eth_call(functions.relayer, [])
    }

    roleNFT(): Promise<string> {
        return this.eth_call(functions.roleNFT, [])
    }

    router(): Promise<string> {
        return this.eth_call(functions.router, [])
    }

    signer(): Promise<string> {
        return this.eth_call(functions.signer, [])
    }

    styleVariantManager(): Promise<string> {
        return this.eth_call(functions.styleVariantManager, [])
    }

    treasury(): Promise<string> {
        return this.eth_call(functions.treasury, [])
    }

    upSSIds(arg0: bigint): Promise<number> {
        return this.eth_call(functions.upSSIds, [arg0])
    }

    upSSSId(): Promise<number> {
        return this.eth_call(functions.upSSSId, [])
    }

    usdc(): Promise<string> {
        return this.eth_call(functions.usdc, [])
    }

    weth(): Promise<string> {
        return this.eth_call(functions.weth, [])
    }
}
