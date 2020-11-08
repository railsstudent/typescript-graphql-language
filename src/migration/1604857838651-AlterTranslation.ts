import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlterTranslation1604857838651 implements MigrationInterface {
    name = 'AlterTranslation1604857838651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "translation" DROP CONSTRAINT "FK_623dbd3b24b20def59f64a56ac6"`)
        await queryRunner.query(`ALTER TABLE "translation" DROP CONSTRAINT "REL_623dbd3b24b20def59f64a56ac"`)
        await queryRunner.query(
            `ALTER TABLE "translation" ADD CONSTRAINT "FK_623dbd3b24b20def59f64a56ac6" FOREIGN KEY ("translationLanguageId") REFERENCES "translate_language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "translation" DROP CONSTRAINT "FK_623dbd3b24b20def59f64a56ac6"`)
        await queryRunner.query(
            `ALTER TABLE "translation" ADD CONSTRAINT "REL_623dbd3b24b20def59f64a56ac" UNIQUE ("translationLanguageId")`,
        )
        await queryRunner.query(
            `ALTER TABLE "translation" ADD CONSTRAINT "FK_623dbd3b24b20def59f64a56ac6" FOREIGN KEY ("translationLanguageId") REFERENCES "translate_language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        )
    }
}
