import { MigrationInterface, QueryRunner } from "typeorm";

export class Generate1782800336422 implements MigrationInterface {
    name = 'Generate1782800336422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bmi" ADD "notes" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bmi" DROP COLUMN "notes"`);
    }

}
