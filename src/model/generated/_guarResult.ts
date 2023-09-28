import assert from "assert"
import * as marshal from "./marshal"

export class GuarResult {
    private _user!: string
    private _newSSGuar!: number
    private _newSSSGuar!: number
    private _isUpSSS!: boolean

    constructor(props?: Partial<Omit<GuarResult, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._user = marshal.string.fromJSON(json.user)
            this._newSSGuar = marshal.int.fromJSON(json.newSSGuar)
            this._newSSSGuar = marshal.int.fromJSON(json.newSSSGuar)
            this._isUpSSS = marshal.boolean.fromJSON(json.isUpSSS)
        }
    }

    get user(): string {
        assert(this._user != null, 'uninitialized access')
        return this._user
    }

    set user(value: string) {
        this._user = value
    }

    get newSSGuar(): number {
        assert(this._newSSGuar != null, 'uninitialized access')
        return this._newSSGuar
    }

    set newSSGuar(value: number) {
        this._newSSGuar = value
    }

    get newSSSGuar(): number {
        assert(this._newSSSGuar != null, 'uninitialized access')
        return this._newSSSGuar
    }

    set newSSSGuar(value: number) {
        this._newSSSGuar = value
    }

    get isUpSSS(): boolean {
        assert(this._isUpSSS != null, 'uninitialized access')
        return this._isUpSSS
    }

    set isUpSSS(value: boolean) {
        this._isUpSSS = value
    }

    toJSON(): object {
        return {
            user: this.user,
            newSSGuar: this.newSSGuar,
            newSSSGuar: this.newSSSGuar,
            isUpSSS: this.isUpSSS,
        }
    }
}
