import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddUniqueTranslation1607255563162 implements MigrationInterface {
    name = 'AddUniqueTranslation1607255563162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "translation" ADD CONSTRAINT "UQ_15004a7458b267c0fc5c61191de" UNIQUE ("translationLanguageId", "phraseId")`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "translation" DROP CONSTRAINT "UQ_15004a7458b267c0fc5c61191de"`)
    }
}
