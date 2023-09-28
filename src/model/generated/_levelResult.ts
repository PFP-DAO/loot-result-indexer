import assert from "assert"
import * as marshal from "./marshal"

export class LevelResult {
    private _nftId!: bigint
    private _newLevel!: number
    private _newExp!: number

    constructor(props?: Partial<Omit<LevelResult, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._nftId = marshal.bigint.fromJSON(json.nftId)
            this._newLevel = marshal.int.fromJSON(json.newLevel)
            this._newExp = marshal.int.fromJSON(json.newExp)
        }
    }

    get nftId(): bigint {
        assert(this._nftId != null, 'uninitialized access')
        return this._nftId
    }

    set nftId(value: bigint) {
        this._nftId = value
    }

    get newLevel(): number {
        assert(this._newLevel != null, 'uninitialized access')
        return this._newLevel
    }

    set newLevel(value: number) {
        this._newLevel = value
    }

    get newExp(): number {
        assert(this._newExp != null, 'uninitialized access')
        return this._newExp
    }

    set newExp(value: number) {
        this._newExp = value
    }

    toJSON(): object {
        return {
            nftId: marshal.bigint.toJSON(this.nftId),
            newLevel: this.newLevel,
            newExp: this.newExp,
        }
    }
}
