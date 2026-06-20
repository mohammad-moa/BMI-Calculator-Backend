import { MigrationInterface, QueryRunner } from "typeorm";

export class Generate1781936229069 implements MigrationInterface {
    name = 'Generate1781936229069'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_3a9a76990f0cce019ae83c9c0d"`);
        await queryRunner.query(`ALTER TABLE "bmi" DROP COLUMN "guest_id"`);
        await queryRunner.query(`ALTER TABLE "bmi" ALTER COLUMN "user_id" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bmi" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bmi" ADD "guest_id" uuid NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_3a9a76990f0cce019ae83c9c0d" ON "bmi" USING btree ("guest_id") `);
    }

}
