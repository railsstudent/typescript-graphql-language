import { MigrationInterface, QueryRunner } from 'typeorm'

export class UpdateTranslateLanguage1608353562661 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            UPDATE "translate_language" SET language = '繁體中文' WHERE "id" = 2;
            UPDATE "translate_language" SET language = 'Português' WHERE "id" = 3;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            UPDATE "translate_language" SET language = 'Traditional Chinese' WHERE "id" = 2;
            UPDATE "translate_language" SET language = 'Portuguese' WHERE "id" = 3;
        `)
    }
}
