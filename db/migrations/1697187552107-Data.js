module.exports = class Data1697187552107 {
    name = 'Data1697187552107'

    async up(db) {
        await db.query(`CREATE TABLE "loot_info" ("id" character varying NOT NULL, "timestamp" numeric NOT NULL, "user" text NOT NULL, "captain_id" integer NOT NULL, "guar_result" jsonb NOT NULL, "loot_results" jsonb NOT NULL, "level_result" jsonb, "pay_loot" jsonb, "claim" jsonb, "pool" text NOT NULL, CONSTRAINT "PK_643df6f39f821326c11c918e7fd" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_0bd30a90c231e92ef9f3ca7517" ON "loot_info" ("user") `)
        await db.query(`CREATE INDEX "IDX_c86ae38f66811005b971ce7946" ON "loot_info" ("captain_id") `)
        await db.query(`CREATE TABLE "claim_log" ("id" character varying NOT NULL, "block" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "user" text NOT NULL, "role_id" integer NOT NULL, "amount" numeric NOT NULL, "batch" numeric NOT NULL, CONSTRAINT "PK_e56e77e95c30eeb1bbaff084789" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e6687a33c52210f2ee286ba934" ON "claim_log" ("user") `)
        await db.query(`CREATE INDEX "IDX_80031e25618373ca0ae62868fd" ON "claim_log" ("role_id") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "loot_info"`)
        await db.query(`DROP INDEX "public"."IDX_0bd30a90c231e92ef9f3ca7517"`)
        await db.query(`DROP INDEX "public"."IDX_c86ae38f66811005b971ce7946"`)
        await db.query(`DROP TABLE "claim_log"`)
        await db.query(`DROP INDEX "public"."IDX_e6687a33c52210f2ee286ba934"`)
        await db.query(`DROP INDEX "public"."IDX_80031e25618373ca0ae62868fd"`)
    }
}
