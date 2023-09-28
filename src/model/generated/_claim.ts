import assert from "assert"
import * as marshal from "./marshal"

export class Claim {
    private _amount!: bigint
    private _batch!: bigint

    constructor(props?: Partial<Omit<Claim, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = marshal.bigint.fromJSON(json.amount)
            this._batch = marshal.bigint.fromJSON(json.batch)
        }
    }

    get amount(): bigint {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: bigint) {
        this._amount = value
    }

    get batch(): bigint {
        assert(this._batch != null, 'uninitialized access')
        return this._batch
    }

    set batch(value: bigint) {
        this._batch = value
    }

    toJSON(): object {
        return {
            amount: marshal.bigint.toJSON(this.amount),
            batch: marshal.bigint.toJSON(this.batch),
        }
    }
}
