import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddPhraseUniqueConstraint1604223530700 implements MigrationInterface {
    name = 'AddPhraseUniqueConstraint1604223530700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_1d26d44eda3572787f50826bcc"`)
        await queryRunner.query(
            `ALTER TABLE "phrase" ADD CONSTRAINT "UQ_768950f00be4feb9cfdbd629695" UNIQUE ("lessonId", "phrase")`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "phrase" DROP CONSTRAINT "UQ_768950f00be4feb9cfdbd629695"`)
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_1d26d44eda3572787f50826bcc" ON "phrase" ("phrase") `)
    }
}
