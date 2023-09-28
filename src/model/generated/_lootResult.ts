import assert from "assert"
import * as marshal from "./marshal"

export class LootResult {
    private _slot!: bigint
    private _balance!: number

    constructor(props?: Partial<Omit<LootResult, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._slot = marshal.bigint.fromJSON(json.slot)
            this._balance = marshal.int.fromJSON(json.balance)
        }
    }

    get slot(): bigint {
        assert(this._slot != null, 'uninitialized access')
        return this._slot
    }

    set slot(value: bigint) {
        this._slot = value
    }

    get balance(): number {
        assert(this._balance != null, 'uninitialized access')
        return this._balance
    }

    set balance(value: number) {
        this._balance = value
    }

    toJSON(): object {
        return {
            slot: marshal.bigint.toJSON(this.slot),
            balance: this.balance,
        }
    }
}
