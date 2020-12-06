import { MigrationInterface, QueryRunner } from 'typeorm'

export class SeedData1607255217355 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const [{ id }] = await queryRunner.query(`SELECT id FROM "language" WHERE "name" = 'Spanish' limit 1`)
        await queryRunner.query(
            `INSERT INTO "translate_language"("id", "language") values 
                (1, 'English')
                ,(2, 'Traditional Chinese')
                ,(3, 'Portuguese');
            `,
        )
        await queryRunner.query(`INSERT INTO "lesson"("id", "name", "languageId") values 
            ('58d0484b-c3b1-4e35-a83c-9e2cad02576c', 'Gender', '${id}'),
            ('0958b3cc-0367-4bef-9817-7cd3e74dc469', 'Basic Phrases', '${id}');
        `)

        await queryRunner.query(
            `INSERT INTO "phrase"("id", "phrase", "lessonId") values 
                ('43a20756-d1f4-4d4c-9e76-0cfefd5ccbe3', 'el niño', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')
                ,('3a9c4414-3bba-4d99-8377-0785af93ad2f', 'la niña', '58d0484b-c3b1-4e35-a83c-9e2cad02576c') 
                ,('93fbb458-c513-43db-ae86-e2b04d98d581', 'un niño', '58d0484b-c3b1-4e35-a83c-9e2cad02576c') 
                ,('31fc1277-909a-4bfd-8dfb-af06935aff6d', 'una niña', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')
                ,('a61712ba-d35d-49ea-96ff-282b5db23555', 'el hombre', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')
                ,('baf96f53-4824-4bb6-a5f3-e00b513a1ba9', 'la mujer', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')
                ,('0ebad447-5833-4b93-a6e9-cb50f92ef6fc', 'un hombre', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')
                ,('2bdd796b-3b5a-41c4-9d3d-5e33079ee6b7', 'una mujer', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')               
                ,('307438f8-ce4e-4779-8d87-ee3d81921f45', 'yo soy un niño', '58d0484b-c3b1-4e35-a83c-9e2cad02576c') 
                ,('bd656465-db32-4b0a-9338-bef7bbb1d140', 'él es un niño', '58d0484b-c3b1-4e35-a83c-9e2cad02576c') 
                ,('52631632-661f-406c-b916-2597e73b74fb', 'yo soy una niña', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')
                ,('e000c4d1-9a11-4c35-a534-c2d107d5f31c', 'ella es una niña', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')
                ,('7fc41532-da72-413c-95fd-785c35afcd5c', 'yo soy un hombre', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')
                ,('d1fea5bd-c046-4e4b-8a83-f22d39411253', 'él es un hombre', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')
                ,('1b519b27-0822-4986-9fb3-9b89ea468c2f', 'yo soy una mujer', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')
                ,('fcf25c02-3d70-4967-9622-6532fd153dae', 'ella es una mujer', '58d0484b-c3b1-4e35-a83c-9e2cad02576c')
                ;
            `,
        )

        await queryRunner.query(
            `INSERT INTO "translation" ("id", "translation", "translationLanguageId", "phraseId") values
                ('477c4eb7-9678-445a-b6e8-cc05d957c107', 'the boy', 1, '43a20756-d1f4-4d4c-9e76-0cfefd5ccbe3')
                ,('0ae22d94-d7a8-47e6-b9ee-933ffa821cad', 'the girl', 1, '3a9c4414-3bba-4d99-8377-0785af93ad2f')
                ,('a4166dd8-9011-4dce-bb71-ec5109797725', 'a boy', 1, '93fbb458-c513-43db-ae86-e2b04d98d581')
                ,('dfa23ab5-3698-498e-90d7-96050e3b4e4a', 'a girl', 1, '31fc1277-909a-4bfd-8dfb-af06935aff6d')
                ,('e9d267c5-de75-4894-b14c-0b848ed06df7', 'the man', 1, 'a61712ba-d35d-49ea-96ff-282b5db23555')
                ,('8f380315-64f4-4e64-849b-dd92243cbc53', 'the woman', 1, 'baf96f53-4824-4bb6-a5f3-e00b513a1ba9')
                ,('9d0cdff9-d4ca-4d5b-b00f-33c885fa515a', 'a man', 1, '0ebad447-5833-4b93-a6e9-cb50f92ef6fc')
                ,('a1640f50-cfc0-4300-b0d6-7c079d63edc4', 'a woman', 1, '2bdd796b-3b5a-41c4-9d3d-5e33079ee6b7')
                ,('41de73ea-f68f-4e94-8b44-d500f0aea7f2', 'I am a boy', 1, '307438f8-ce4e-4779-8d87-ee3d81921f45')
                ,('c9ff20cf-1c26-43ed-bccd-1ee12a68ffb8', 'He is a boy', 1, 'bd656465-db32-4b0a-9338-bef7bbb1d140')
                ,('0acfee4b-80c6-4435-bf42-7eaa749d02b7', 'I am a girl', 1, '52631632-661f-406c-b916-2597e73b74fb')
                ,('6a25c517-4a54-432d-81db-1eec30363e76', 'She is a girl', 1, 'e000c4d1-9a11-4c35-a534-c2d107d5f31c')
                ,('fc2588e2-a554-431a-afee-321d2601aca6', 'I am a man', 1, '7fc41532-da72-413c-95fd-785c35afcd5c')
                ,('7e3c6063-09f0-4749-9a6c-02fea1ddb609', 'He is a man', 1, 'd1fea5bd-c046-4e4b-8a83-f22d39411253')
                ,('28710684-6c15-4751-8147-7ced4a73159f', 'I am a woman', 1, '1b519b27-0822-4986-9fb3-9b89ea468c2f')
                ,('c8ba1c85-c9e9-4c16-ba9e-ad31b61825c7', 'She is a woman', 1, 'fcf25c02-3d70-4967-9622-6532fd153dae')
                ,('d9af6c7a-f567-4e58-a43e-ce1d5b5cfbb6', '男孩', 2, '43a20756-d1f4-4d4c-9e76-0cfefd5ccbe3')
                ,('bdef0b2b-429c-4e85-a7e5-4a85ab7ed87a', '女孩', 2, '3a9c4414-3bba-4d99-8377-0785af93ad2f')
                ,('0b2fcf68-8228-4657-abd5-1f55b7dbcbe5', '一個男孩', 2, '93fbb458-c513-43db-ae86-e2b04d98d581')
                ,('7dd9485e-da80-4228-8b3f-846bf56dca4a', '一個女孩', 2, '31fc1277-909a-4bfd-8dfb-af06935aff6d')
                ,('0d00eaf3-0b1f-4409-b78c-0860ae933ac4', '男人', 2, 'a61712ba-d35d-49ea-96ff-282b5db23555')
                ,('cace64e7-3155-44a3-be12-a980d4c912df', '女人', 2, 'baf96f53-4824-4bb6-a5f3-e00b513a1ba9')
                ,('b1100394-042f-4a35-85f8-495fa0ab9699', '一個男人', 2, '0ebad447-5833-4b93-a6e9-cb50f92ef6fc')
                ,('30dffcab-956b-4837-969b-984016915f43', '一個女人', 2, '2bdd796b-3b5a-41c4-9d3d-5e33079ee6b7')
                ,('ff127800-235c-431a-83db-bf169c91f19d', '我是一個男孩', 2, '307438f8-ce4e-4779-8d87-ee3d81921f45')
                ,('b897d769-edf2-41ea-afd4-e6c088f85456', '他是個男孩', 2, 'bd656465-db32-4b0a-9338-bef7bbb1d140')
                ,('6be02552-6e74-48c1-aa51-13520b433c39', '我是一個女孩', 2, '52631632-661f-406c-b916-2597e73b74fb')
                ,('04d9ddd4-a3e0-4e26-8d59-8bc0b6fe7041', '她是個女孩', 2, 'e000c4d1-9a11-4c35-a534-c2d107d5f31c')
                ,('458e2094-1b7f-403a-ab64-02677f6f108e', '我是一個男人', 2, '7fc41532-da72-413c-95fd-785c35afcd5c')
                ,('06078dc1-9c05-475c-a739-edc38a91079c', '他是一個男人', 2, 'd1fea5bd-c046-4e4b-8a83-f22d39411253')
                ,('abb99680-f487-46ab-9903-ed42a781a13b', '我是一個女人', 2, '1b519b27-0822-4986-9fb3-9b89ea468c2f')
                ,('2dcca732-d63d-45f0-ad80-dd02919301c9', '她是一個女人', 2, 'fcf25c02-3d70-4967-9622-6532fd153dae')
            `,
        )

        await queryRunner.query(
            `INSERT INTO "phrase"("id", "phrase", "lessonId") values 
                ('45316af5-fcc3-42fb-99da-c22f9c752970', 'Buenos días', '0958b3cc-0367-4bef-9817-7cd3e74dc469')
                ,('52d6b15e-0128-4bf8-a416-caec4bdddcd6', 'Buenas tardes', '0958b3cc-0367-4bef-9817-7cd3e74dc469') 
                ,('7269cfa9-6bec-46be-a327-a422041c4d0e', 'Buenas noches', '0958b3cc-0367-4bef-9817-7cd3e74dc469') 
                ,('bd4cf83a-ee2d-4842-a8c9-1ba0c5708ca4', 'De nada', '0958b3cc-0367-4bef-9817-7cd3e74dc469')
                ,('cadf268e-d90e-4950-a9fd-4f9bda427ba0', 'Mucho gusto', '0958b3cc-0367-4bef-9817-7cd3e74dc469')
                ,('f77b017e-1e0a-4b9c-8628-4888f2fac96c', 'Adiós', '0958b3cc-0367-4bef-9817-7cd3e74dc469')
                ,('a488c936-d40e-4a7b-aec2-6301b2cc7596', 'Gracias', '0958b3cc-0367-4bef-9817-7cd3e74dc469')
                ,('ca0a395b-c046-4ae0-8ce6-8bec544d838e', 'Muchas gracias', '0958b3cc-0367-4bef-9817-7cd3e74dc469')               
                ,('2ec049a1-c61d-4bdf-a828-e6a9d9e635c3', 'Hasta luego', '0958b3cc-0367-4bef-9817-7cd3e74dc469') 
                ,('0f33f053-f176-40f2-882d-5e5663eb9fcb', 'Hasta mañana', '0958b3cc-0367-4bef-9817-7cd3e74dc469') 
                ,('13a39224-13bd-471f-814e-c8c50ef5983f', 'Estoy bien', '0958b3cc-0367-4bef-9817-7cd3e74dc469')
                ;
            `,
        )

        await queryRunner.query(
            `INSERT INTO "translation" ("id", "translation", "translationLanguageId", "phraseId") values
                ('3ade4a4d-815d-43e5-becd-5af2872833e8', 'Good morning', 1, '45316af5-fcc3-42fb-99da-c22f9c752970')
                ,('39a5728d-1da3-4244-8f52-9bdba931f8fc', 'Good afternoon', 1, '52d6b15e-0128-4bf8-a416-caec4bdddcd6')
                ,('04ce81af-8c11-4c9d-8044-cf4f93f2c846', 'Good night', 1, '7269cfa9-6bec-46be-a327-a422041c4d0e')
                ,('4ae1f935-9ff8-4806-afcb-3d5591452201', 'You are welcome', 1, 'bd4cf83a-ee2d-4842-a8c9-1ba0c5708ca4')
                ,('0ec822b6-5524-494b-aa29-ac1e889ad988', 'Nice to meet you', 1, 'cadf268e-d90e-4950-a9fd-4f9bda427ba0')
                ,('a2b8fdbc-3d3c-488a-b2e1-539fbabb182e', 'Good bye', 1, 'f77b017e-1e0a-4b9c-8628-4888f2fac96c')
                ,('8b8795dc-7e14-434b-a633-a99667ec2acf', 'Thank you', 1, 'a488c936-d40e-4a7b-aec2-6301b2cc7596')
                ,('0b30ac88-7e63-4b04-b54d-42af73f24eda', 'Thank you very much', 1, 'ca0a395b-c046-4ae0-8ce6-8bec544d838e')
                ,('98f720ad-dd2b-44b1-a5e3-22cdbfd588b6', 'See you later', 1, '2ec049a1-c61d-4bdf-a828-e6a9d9e635c3')
                ,('e5111cb3-d9bd-4dbf-915f-54f3b32a1852', 'See you tomorrow', 1, '0f33f053-f176-40f2-882d-5e5663eb9fcb')
                ,('7b9f8b7b-b36b-4195-bab3-7f18988166e2', 'I am well', 1, '13a39224-13bd-471f-814e-c8c50ef5983f')
                ,('3a65638c-c69b-4674-87a3-2d6c5fe4d652', '早安', 2, '45316af5-fcc3-42fb-99da-c22f9c752970')
                ,('34ffb489-b517-483e-9424-2f4b175890ea', '午安', 2, '52d6b15e-0128-4bf8-a416-caec4bdddcd6')
                ,('6951c6f4-823a-4c81-a4c7-a8d5dbba53ae', '晚安', 2, '7269cfa9-6bec-46be-a327-a422041c4d0e')
                ,('f703be55-1468-4299-8323-76b753ae95b9', '別客氣', 2, 'bd4cf83a-ee2d-4842-a8c9-1ba0c5708ca4')
                ,('b73e528f-37f9-41bf-9555-c8b16d2f2972', '很高興認識你', 2, 'cadf268e-d90e-4950-a9fd-4f9bda427ba0')
                ,('f034d4d2-7fd1-41f7-adb7-dfb7feac21cc', '再見', 2, 'f77b017e-1e0a-4b9c-8628-4888f2fac96c')
                ,('cccf5cbf-d63c-4b88-b163-240072c1f87f', '謝謝', 2, 'a488c936-d40e-4a7b-aec2-6301b2cc7596')
                ,('0209f48a-cc48-4c67-a804-0ae03a003308', '非常感謝你', 2, 'ca0a395b-c046-4ae0-8ce6-8bec544d838e')
                ,('98044078-0150-4223-a68b-981b8556c16c', '回頭見', 2, '2ec049a1-c61d-4bdf-a828-e6a9d9e635c3')
                ,('181bed35-a2fd-4692-8f95-ea7ca8c676c8', '明天見', 2, '0f33f053-f176-40f2-882d-5e5663eb9fcb')
                ,('83d8e3ae-7493-4cd2-a633-f2ada7766a2b', '我很好', 2, '13a39224-13bd-471f-814e-c8c50ef5983f')
            `,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE from "translation";
            DELETE from "phrase";
            DELETE from "translate_language";
            DELETE from "lesson";
        `)
    }
}
