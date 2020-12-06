import { MigrationInterface, QueryRunner } from 'typeorm'

export class NewEntities1603722388617 implements MigrationInterface {
    name = 'NewEntities1603722388617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "translate_language" ("id" SERIAL NOT NULL, "language" text NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6424ace6d42ec2f73d9ea3e0e92" PRIMARY KEY ("id"))`,
        )
        await queryRunner.query(
            `CREATE UNIQUE INDEX "IDX_db0fc9f4a4a561308387f4ac8d" ON "translate_language" ("language") `,
        )
        await queryRunner.query(
            `CREATE TABLE "translation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "translation" text NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "translationLanguageId" integer, "phraseId" uuid, CONSTRAINT "REL_623dbd3b24b20def59f64a56ac" UNIQUE ("translationLanguageId"), CONSTRAINT "PK_7aef875e43ab80d34a0cdd39c70" PRIMARY KEY ("id"))`,
        )
        await queryRunner.query(
            `CREATE TABLE "phrase" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phrase" text NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "lessonId" uuid, CONSTRAINT "PK_c62abf17177643294ade6f1a42b" PRIMARY KEY ("id"))`,
        )
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_1d26d44eda3572787f50826bcc" ON "phrase" ("phrase") `)
        await queryRunner.query(
            `CREATE TABLE "lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "languageId" uuid, CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`,
        )
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_c60c736b10b5dafeb0923d5c1f" ON "lesson" ("name") `)
        await queryRunner.query(
            `ALTER TABLE "translation" ADD CONSTRAINT "FK_623dbd3b24b20def59f64a56ac6" FOREIGN KEY ("translationLanguageId") REFERENCES "translate_language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        )
        await queryRunner.query(
            `ALTER TABLE "translation" ADD CONSTRAINT "FK_1006a0b66260965ccf2ea7d4635" FOREIGN KEY ("phraseId") REFERENCES "phrase"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        )
        await queryRunner.query(
            `ALTER TABLE "phrase" ADD CONSTRAINT "FK_36f3efa17560e00a633e2043be8" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        )
        await queryRunner.query(
            `ALTER TABLE "lesson" ADD CONSTRAINT "FK_d56e101695dc9292af226db76b2" FOREIGN KEY ("languageId") REFERENCES "language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_d56e101695dc9292af226db76b2"`)
        await queryRunner.query(`ALTER TABLE "phrase" DROP CONSTRAINT "FK_36f3efa17560e00a633e2043be8"`)
        await queryRunner.query(`ALTER TABLE "translation" DROP CONSTRAINT "FK_1006a0b66260965ccf2ea7d4635"`)
        await queryRunner.query(`ALTER TABLE "translation" DROP CONSTRAINT "FK_623dbd3b24b20def59f64a56ac6"`)
        await queryRunner.query(`DROP INDEX "IDX_c60c736b10b5dafeb0923d5c1f"`)
        await queryRunner.query(`DROP TABLE "lesson"`)
        await queryRunner.query(`DROP INDEX "IDX_1d26d44eda3572787f50826bcc"`)
        await queryRunner.query(`DROP TABLE "phrase"`)
        await queryRunner.query(`DROP TABLE "translation"`)
        await queryRunner.query(`DROP INDEX "IDX_db0fc9f4a4a561308387f4ac8d"`)
        await queryRunner.query(`DROP TABLE "translate_language"`)
    }
}
