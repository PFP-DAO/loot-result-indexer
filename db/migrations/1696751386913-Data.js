module.exports = class Data1696751386913 {
    name = 'Data1696751386913'

    async up(db) {
        await db.query(`CREATE TABLE "loot_info" ("id" character varying NOT NULL, "timestamp" numeric NOT NULL, "user" text NOT NULL, "captain_id" integer NOT NULL, "guar_result" jsonb NOT NULL, "loot_results" jsonb NOT NULL, "level_result" jsonb, "pay_loot" jsonb, "claim" jsonb, "pool" text NOT NULL, CONSTRAINT "PK_643df6f39f821326c11c918e7fd" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_0bd30a90c231e92ef9f3ca7517" ON "loot_info" ("user") `)
        await db.query(`CREATE INDEX "IDX_c86ae38f66811005b971ce7946" ON "loot_info" ("captain_id") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "loot_info"`)
        await db.query(`DROP INDEX "public"."IDX_0bd30a90c231e92ef9f3ca7517"`)
        await db.query(`DROP INDEX "public"."IDX_c86ae38f66811005b971ce7946"`)
    }
}
