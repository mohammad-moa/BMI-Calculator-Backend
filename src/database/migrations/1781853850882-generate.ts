import { MigrationInterface, QueryRunner } from "typeorm";

export class Generate1781853850882 implements MigrationInterface {
    name = 'Generate1781853850882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."bmi_gender_enum" AS ENUM('male', 'female')`);
        await queryRunner.query(`CREATE TYPE "public"."bmi_weight_unit_enum" AS ENUM('kg', 'lb')`);
        await queryRunner.query(`CREATE TYPE "public"."bmi_height_unit_enum" AS ENUM('cm', 'ft')`);
        await queryRunner.query(`CREATE TYPE "public"."bmi_status_enum" AS ENUM('under_weight', 'normal', 'over_weight', 'obese')`);
        await queryRunner.query(`CREATE TABLE "bmi" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "deleted_at" TIMESTAMP WITH TIME ZONE, "gender" "public"."bmi_gender_enum" NOT NULL DEFAULT 'male', "age" smallint NOT NULL, "weight" double precision NOT NULL, "weight_unit" "public"."bmi_weight_unit_enum" NOT NULL DEFAULT 'kg', "height" double precision NOT NULL, "height_unit" "public"."bmi_height_unit_enum" NOT NULL DEFAULT 'cm', "bmi" double precision NOT NULL, "body_fat" double precision NOT NULL, "status" "public"."bmi_status_enum", "guest_id" uuid NOT NULL, "user_id" uuid, CONSTRAINT "PK_9b1c01446790bc48fc915f8a4e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3a9a76990f0cce019ae83c9c0d" ON "bmi"  ("guest_id") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_3a9a76990f0cce019ae83c9c0d"`);
        await queryRunner.query(`DROP TABLE "bmi"`);
        await queryRunner.query(`DROP TYPE "public"."bmi_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."bmi_height_unit_enum"`);
        await queryRunner.query(`DROP TYPE "public"."bmi_weight_unit_enum"`);
        await queryRunner.query(`DROP TYPE "public"."bmi_gender_enum"`);
    }

}
