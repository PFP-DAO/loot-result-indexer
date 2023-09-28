import assert from "assert"
import * as marshal from "./marshal"

export class PayLoot {
    private _amount!: bigint
    private _usdc!: boolean

    constructor(props?: Partial<Omit<PayLoot, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = marshal.bigint.fromJSON(json.amount)
            this._usdc = marshal.boolean.fromJSON(json.usdc)
        }
    }

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    get usdc(): boolean {
        assert(this._usdc != null, 'uninitialized access')
        return this._usdc
    }

    set usdc(value: boolean) {
        this._usdc = value
    }

    toJSON(): object {
        return {
            amount: marshal.bigint.toJSON(this.amount),
            usdc: this.usdc,
        }
    }
}
