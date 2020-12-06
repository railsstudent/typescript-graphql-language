import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateLanguage1603038989354 implements MigrationInterface {
    name = 'CreateLanguage1603038989354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "language" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nativeName" text NOT NULL, "name" text NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cc0a99e710eb3733f6fb42b1d4c" PRIMARY KEY ("id"))`,
        )
        await queryRunner.query(
            `INSERT INTO "language" ("id", "nativeName", "name") values ('16744281-e1af-44f2-a67d-0cb04bd0d6a2', 'Español', 'Spanish')`,
        )
        await queryRunner.query(
            `INSERT INTO "language" ("id", "nativeName", "name") values ('2371f4eb-6876-4fc8-8ca4-941fd1e2773e', 'Português', 'Portuguese')`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "language"`)
    }
}
