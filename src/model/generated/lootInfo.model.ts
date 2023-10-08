import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {GuarResult} from "./_guarResult"
import {LootResult} from "./_lootResult"
import {LevelResult} from "./_levelResult"
import {PayLoot} from "./_payLoot"
import {Claim} from "./_claim"

@Entity_()
export class LootInfo {
    constructor(props?: Partial<LootInfo>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    user!: string

    @Index_()
    @Column_("int4", {nullable: false})
    captainId!: number

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new GuarResult(undefined, obj)}, nullable: false})
    guarResult!: GuarResult

    @Column_("jsonb", {transformer: {to: obj => obj.map((val: any) => val == null ? undefined : val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => val == null ? undefined : new LootResult(undefined, val))}, nullable: false})
    lootResults!: (LootResult | undefined | null)[]

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new LevelResult(undefined, obj)}, nullable: true})
    levelResult!: LevelResult | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new PayLoot(undefined, obj)}, nullable: true})
    payLoot!: PayLoot | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Claim(undefined, obj)}, nullable: true})
    claim!: Claim | undefined | null

    @Column_("text", {nullable: false})
    pool!: string
}
