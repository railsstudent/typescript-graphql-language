import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddLessonUniqueLessonConstraint1604200961707 implements MigrationInterface {
    name = 'AddLessonUniqueLessonConstraint1604200961707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_c60c736b10b5dafeb0923d5c1f"`)
        await queryRunner.query(
            `ALTER TABLE "lesson" ADD CONSTRAINT "UQ_adfafbad7b69ec9ef3f3bb0b271" UNIQUE ("languageId", "name")`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "UQ_adfafbad7b69ec9ef3f3bb0b271"`)
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_c60c736b10b5dafeb0923d5c1f" ON "lesson" ("name") `)
    }
}
