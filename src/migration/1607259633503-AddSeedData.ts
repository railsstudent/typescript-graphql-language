import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddSeedData1607259633503 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "lesson"("id", "name", "languageId") values 
            ('cbdc90a2-89f3-4198-b2a6-5a84eb07de0e', 'Month', '16744281-e1af-44f2-a67d-0cb04bd0d6a2');
        `)

        await queryRunner.query(
            `INSERT INTO "phrase"("id", "phrase", "lessonId") values 
            ('334c7f90-60b4-4794-977b-842c865865ff', 'enero', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ,('1c811dd8-42d5-4fe5-940e-212c5af81009', 'febrero', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ,('9faf8fab-6f4f-4ffe-9df5-51b8e644b4ad', 'marzo', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ,('375ff2b5-06b4-431b-8f52-367724908951', 'abril', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ,('8de39a6e-037b-448f-955b-90543f429cf3', 'mayo', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ,('4d8088ad-3e59-4684-bca0-a28e572220c8', 'junio', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ,('b62293fd-7b02-417b-909b-5fd789def427', 'julio', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ,('6f8e54ac-b9d7-4ff1-86d3-5a5f61b57e49', 'augusto', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ,('b86bfcc4-b575-450f-a4ea-8bfa79dd7377', 'septiembre', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ,('5ee5176d-05a6-4573-a553-ba4016923d6d', 'octubre', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ,('faa52d62-e3a8-4aa5-9bb4-e710db983ed9', 'noviembre', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ,('b2f5e241-df7a-475f-bff7-239f6327aabd', 'diciembre', 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e')
            ;
        `,
        )

        await queryRunner.query(
            `INSERT INTO "translation" ("id", "translation", "translationLanguageId", "phraseId") values
            ('a94112e0-8461-4e93-b189-19f15b61f7c7', 'January', 1, '334c7f90-60b4-4794-977b-842c865865ff')
            , ('0f16c3f8-e625-40f6-8462-6236c18c46a4', 'February', 1, '1c811dd8-42d5-4fe5-940e-212c5af81009')
            , ('9a88e73e-15a8-41a0-98c5-d419f9c790ed', 'March', 1, '9faf8fab-6f4f-4ffe-9df5-51b8e644b4ad')
            , ('e854e358-d271-4dc6-a313-133770401a6f', 'April', 1, '375ff2b5-06b4-431b-8f52-367724908951')
            , ('6c7110d2-8fec-45ff-a9a3-1b3537485e5f', 'May', 1, '8de39a6e-037b-448f-955b-90543f429cf3')
            , ('2a491894-cb48-4702-b3c4-a325e42106c5', 'June', 1, '4d8088ad-3e59-4684-bca0-a28e572220c8')
            , ('a18b825f-cb2e-45a3-8f6b-2969bfeac017', 'July', 1, 'b62293fd-7b02-417b-909b-5fd789def427')
            , ('40a691e7-bd6f-49c4-b554-a7cac6c7b2b7', 'August', 1, '6f8e54ac-b9d7-4ff1-86d3-5a5f61b57e49')
            , ('3c71a86e-99a2-4c60-b4a1-9dec0f71f3a3', 'September', 1, 'b86bfcc4-b575-450f-a4ea-8bfa79dd7377')
            , ('1f2c76b5-c894-4637-a0a9-56086542c85e', 'October', 1, '5ee5176d-05a6-4573-a553-ba4016923d6d')
            , ('af810593-461a-4709-845e-773f7b281a9e', 'November', 1, 'faa52d62-e3a8-4aa5-9bb4-e710db983ed9')
            , ('d23c10b7-b69c-4e2a-a950-f4fe42125d29', 'December', 1, 'b2f5e241-df7a-475f-bff7-239f6327aabd')
            , ('baac2129-be0c-4a57-9b21-471ac738b593', '一月', 2, '334c7f90-60b4-4794-977b-842c865865ff')
            , ('577cf59c-ce1b-4640-a92d-87eb302fc1ae', '二月', 2, '1c811dd8-42d5-4fe5-940e-212c5af81009')
            , ('928aa232-8aa0-4257-8145-f95bf47a913b', '三月', 2, '9faf8fab-6f4f-4ffe-9df5-51b8e644b4ad')
            , ('ed4dd561-d9e0-455c-8dd5-d8bf757b5a25', '四月', 2, '375ff2b5-06b4-431b-8f52-367724908951')
            , ('ad169d23-7e6b-466a-8ba7-c6e987dd01de', '五月', 2, '8de39a6e-037b-448f-955b-90543f429cf3')
            , ('995a5f77-1419-4ee6-a78f-0c8c91676d22', '六月', 2, '4d8088ad-3e59-4684-bca0-a28e572220c8')
            , ('40f9beb5-0c8b-4fa7-b6d8-68e3701efb25', '七月', 2, 'b62293fd-7b02-417b-909b-5fd789def427')
            , ('94f98875-299a-42c2-9a66-e98051912fdc', '八月', 2, '6f8e54ac-b9d7-4ff1-86d3-5a5f61b57e49')
            , ('5b17b302-fb73-4ee2-9361-e311ff57423a', '九月', 2, 'b86bfcc4-b575-450f-a4ea-8bfa79dd7377')
            , ('3b3f2a27-1f58-41da-a661-2b6375e82e7d', '十月', 2, '5ee5176d-05a6-4573-a553-ba4016923d6d')
            , ('5e463323-ec4b-4ac3-ac90-750616fa7545', '十一月', 2, 'faa52d62-e3a8-4aa5-9bb4-e710db983ed9')
            , ('53d94c25-0a3a-41b7-8c48-38725b966caf', '十二月', 2, 'b2f5e241-df7a-475f-bff7-239f6327aabd')
            ;
        `,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM "translation" WHERE "phraseId" IN (
                SELECT "phrase"."id"
                FROM "phrase"
                JOIN "lesson" on "phrase"."lessonId" = "lesson"."id"
                WHERE "lesson"."id" = 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e'
            );
        `)

        await queryRunner.query(`
            DELETE FROM "phrase" WHERE "lessonId" = 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e';
        `)

        await queryRunner.query(`
            DELETE FROM "lesson" WHERE "id" = 'cbdc90a2-89f3-4198-b2a6-5a84eb07de0e';
        `)
    }
}
