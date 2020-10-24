import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddFlagColumn1603517805962 implements MigrationInterface {
    name = 'AddFlagColumn1603517805962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "language" ADD "flag" text NOT NULL DEFAULT ''`)
        await queryRunner.query(
            `UPDATE "language" SET "flag" = 'https://restcountries.eu/data/esp.svg' WHERE "name" = 'Spanish'`,
        )
        await queryRunner.query(
            `UPDATE "language" SET "flag" = 'https://restcountries.eu/data/bra.svg' WHERE "name" = 'Portuguese'`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "language" DROP COLUMN "flag"`)
    }
}
