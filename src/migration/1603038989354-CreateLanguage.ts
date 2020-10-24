import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateLanguage1603038989354 implements MigrationInterface {
    name = 'CreateLanguage1603038989354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "language" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nativeName" text NOT NULL, "name" text NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cc0a99e710eb3733f6fb42b1d4c" PRIMARY KEY ("id"))`,
        )
        await queryRunner.query(`INSERT INTO "language" ("nativeName", "name") values ('Español', 'Spanish')`)
        await queryRunner.query(`INSERT INTO "language" ("nativeName", "name") values ('Português', 'Portuguese')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "language"`)
    }
}
