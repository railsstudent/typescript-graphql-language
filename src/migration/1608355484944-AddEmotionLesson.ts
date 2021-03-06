import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddEmotionLesson1608355484944 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO "lesson"("id", "name", "languageId") values ('5bc812cb-0683-4dcf-8ed9-593f94d1d461', 'Emotion', '16744281-e1af-44f2-a67d-0cb04bd0d6a2');
        INSERT INTO "phrase"("id", "phrase", "lessonId") values ('2e5b8b2e-1a74-4496-9bd7-cb6e4757b04e', 'Estoy contento con mis zapatos', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('4c20aa13-e779-4539-a9fa-36f5b5a6ad61', 'Tú estás preocupado por la prueba', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('1431552e-ef03-401a-93d8-49a8dc648edd', 'El bebé está enfermo y necesita más leche', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('f40d26fa-ab98-4eaf-a463-44b68f06b7a2', 'La chica tiene un perro y está muy emocionada', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('7391be86-2753-4f1f-b2c5-9421cef0d3e8', 'Estoy muy emocionado', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('f231ba1b-6faa-466d-91f7-5f8aa286a4ec', 'Me siento muy contento contigo, Ana', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('fdfde0a9-5915-417b-a0f4-e566e0608609', '¿Te sientes enfermo, Roberto?', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('c47a8797-6e89-49c4-98f0-f3f4466ef631', 'Mi hermana siempre está aburrida', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('0a2ad60e-6143-4094-a38c-4cc8ac5e72de', 'Carla, ¿cómo está tu bebé esta mañana?', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('0507c52f-6693-4f90-8bb2-0ec6b37bb10b', '¿El señor Pérez está contento con su trabajo?', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('12fb700a-b130-48b3-9aa8-c37c26ef468e', 'Es el fin de semana y estoy muy contento', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('fc22852e-e91f-4e32-bc1e-3f68328224d9', '¿Te sientes mejor hoy, Bruno?', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('a44bb66e-235c-4ac9-ae54-6d036f78c96c', 'Ellos no son simpáticos conmigo', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('3dc643fb-4fac-4166-bfcf-5a2f6e528e22', 'Sara, ¿por qué te sientes triste?', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('09a65cab-ad4f-4de0-82e4-1acdc4cec950', 'Ana siempre está feliz en la clase de francés', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('6548a0e6-1c2a-43f3-8d92-7c4ce99c6d59', 'Lo siento, estoy muy aburrido en este concierto', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('0316eb73-3975-4fbd-b9dc-8e0c1aea7ccd', 'Siempre me siento cansado', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('45aa71c7-f0fd-4f9b-af6b-7b41267534f8', 'A veces me siento un poco cansada en la mañana', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('694bf12e-29a9-4d44-9f00-d2b500a94086', 'Rafael, ¿no estás emocionado?', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ,('e42be966-e1e4-4515-a118-29f8efa9251b', 'También te sientes feliz', '5bc812cb-0683-4dcf-8ed9-593f94d1d461')
        ;
        INSERT INTO "translation" ("id", "translation", "translationLanguageId", "phraseId") values ('f2881e2c-44b9-4dd6-a9c1-9cbb3ee0a244', 'I am happy with my shoes.', 1, '2e5b8b2e-1a74-4496-9bd7-cb6e4757b04e')
        ,('c339d583-c1d6-46b9-945a-35c06cb4d0dd', 'You are worried about the test.', 1, '4c20aa13-e779-4539-a9fa-36f5b5a6ad61')
        ,('ee027039-5a13-41a1-83e3-70179c39f746', 'The baby is sick and needs more milk.', 1, '1431552e-ef03-401a-93d8-49a8dc648edd')
        ,('666d7478-b719-464f-90c9-740a0908fea7', 'The girl has a dog and is very excited.', 1, 'f40d26fa-ab98-4eaf-a463-44b68f06b7a2')
        ,('846adf7f-059e-4c7f-844a-2ebef8483fca', 'I am very excited.', 1, '7391be86-2753-4f1f-b2c5-9421cef0d3e8')
        ,('e7f79877-be02-44a6-9698-595ae47ae9cf', 'I feel very happy with you, Ana.', 1, 'f231ba1b-6faa-466d-91f7-5f8aa286a4ec')
        ,('82b1b8db-30f8-450a-8d7c-7687033e44c3', 'Do you feel sick, Roberto?', 1, 'fdfde0a9-5915-417b-a0f4-e566e0608609')
        ,('b4c2922a-db20-4557-89f4-a980d16ceb28', 'My sister is always bored.', 1, 'c47a8797-6e89-49c4-98f0-f3f4466ef631')
        ,('3b83676e-320c-43b4-a5a8-3b5c5d7c9259', 'Carla, how is your baby this morning?', 1, '0a2ad60e-6143-4094-a38c-4cc8ac5e72de')
        ,('3c32209d-47e0-428a-af92-d95d86f34a14', 'Is Mr. Pérez happy with his job?', 1, '0507c52f-6693-4f90-8bb2-0ec6b37bb10b')
        ,('fd533c5a-ceb3-432e-8c35-16f12c36f460', 'It is the weekend and I am very happy.', 1, '12fb700a-b130-48b3-9aa8-c37c26ef468e')
        ,('ef4dc707-bbe3-4568-af44-f5d4fab4a902', 'Do you feel better today, Bruno?', 1, 'fc22852e-e91f-4e32-bc1e-3f68328224d9')
        ,('4ab0406e-b76a-445e-9093-4c5acdc431ca', 'They are not nice to me.', 1, 'a44bb66e-235c-4ac9-ae54-6d036f78c96c')
        ,('8ffb3ef7-d75a-4a7e-ad86-abc83f29d136', 'Sara, why do you feel sad?', 1, '3dc643fb-4fac-4166-bfcf-5a2f6e528e22')
        ,('7d0fb94a-5402-4990-8c3f-1f4284e55074', 'Ana is always happy in French class.', 1, '09a65cab-ad4f-4de0-82e4-1acdc4cec950')
        ,('94453823-18ce-49d0-954e-f88c32c1366c', 'I am sorry, I am very bored at this concert.', 1, '6548a0e6-1c2a-43f3-8d92-7c4ce99c6d59')
        ,('f17b2b3b-b6ae-4c5a-9035-71d93ac42ef5', 'I always feel tired.', 1, '0316eb73-3975-4fbd-b9dc-8e0c1aea7ccd')
        ,('1de996b8-3bd7-4f7c-ba57-7978335b3059', 'Sometimes I feel a little tired in the morning.', 1, '45aa71c7-f0fd-4f9b-af6b-7b41267534f8')
        ,('0af01857-6235-4f76-886d-5a4c92010195', 'Rafael, aren''t you excited?', 1, '694bf12e-29a9-4d44-9f00-d2b500a94086')
        ,('ea87ccff-e9ef-4fc4-9298-d3f012503577', 'You also feel happy.', 1, 'e42be966-e1e4-4515-a118-29f8efa9251b')
        ,('8d89e073-57d7-4e19-a87a-aac4d76730d8', '我對我的鞋子很滿意', 2, '2e5b8b2e-1a74-4496-9bd7-cb6e4757b04e')
        ,('cf703d50-beb8-4e7b-aada-3f64498ee2d4', '您擔心測試。', 2, '4c20aa13-e779-4539-a9fa-36f5b5a6ad61')
        ,('3833cd9b-0ae1-4e17-88fa-ef33ae44fb1f', '嬰兒病了，需要更多的牛奶。', 2, '1431552e-ef03-401a-93d8-49a8dc648edd')
        ,('869660c9-a06f-44d5-aee0-77d6f6dc91a4', '這個女孩有一隻狗，她非常興奮。', 2, 'f40d26fa-ab98-4eaf-a463-44b68f06b7a2')
        ,('7d03f37a-241f-419d-962d-0fa71c32ba0d', '我非常興奮。', 2, '7391be86-2753-4f1f-b2c5-9421cef0d3e8')
        ,('267874b0-d4a6-45b0-8981-b052b705df6f', '我對您感到非常高興，安娜。', 2, 'f231ba1b-6faa-466d-91f7-5f8aa286a4ec')
        ,('17da4a66-3c4a-4919-b6cc-d4dfdf496c0e', '羅伯托，你感到不舒服嗎？', 2, 'fdfde0a9-5915-417b-a0f4-e566e0608609')
        ,('3ca1b65c-4724-465d-a5ea-974e869fae0c', '我姐姐總是很無聊。', 2, 'c47a8797-6e89-49c4-98f0-f3f4466ef631')
        ,('0416ef29-2a59-4079-8996-8f14e1c380c4', '卡拉，你的寶寶今天早上好嗎？', 2, '0a2ad60e-6143-4094-a38c-4cc8ac5e72de')
        ,('ad6f1f48-9b6f-4d59-a6f2-a2deacd8de67', '佩雷斯先生對他的工作滿意嗎？', 2, '0507c52f-6693-4f90-8bb2-0ec6b37bb10b')
        ,('c969cb22-27ab-4e07-96d8-21d01caba097', '這是周末，我很高興。', 2, '12fb700a-b130-48b3-9aa8-c37c26ef468e')
        ,('ea1adec2-ba6e-4b2b-b814-bcfc0d237429', '布魯諾，你今天感覺好點了嗎？', 2, 'fc22852e-e91f-4e32-bc1e-3f68328224d9')
        ,('00e9d74b-14fb-4ef2-aebc-a1ddfb478555', '他們對我不好。', 2, 'a44bb66e-235c-4ac9-ae54-6d036f78c96c')
        ,('abad1abc-9f14-4601-b64e-66a093639779', '薩拉，你為什麼感到難過？', 2, '3dc643fb-4fac-4166-bfcf-5a2f6e528e22')
        ,('0fe26cdc-ac15-4eb3-a06a-47d53f9786d4', '安娜在法語課上總是很快樂。', 2, '09a65cab-ad4f-4de0-82e4-1acdc4cec950')
        ,('a1c50dde-abed-40a6-b0cc-c951f0243f67', '對不起，這場音樂會我很無聊。', 2, '6548a0e6-1c2a-43f3-8d92-7c4ce99c6d59')
        ,('a778c681-1bae-40df-b921-ca9f9e0b6ae5', '我總是很累。', 2, '0316eb73-3975-4fbd-b9dc-8e0c1aea7ccd')
        ,('130a259a-0684-4f23-829d-f11984dad827', '我早上有時候會有點累。', 2, '45aa71c7-f0fd-4f9b-af6b-7b41267534f8')
        ,('ddbaf198-9ed3-41c2-a5c1-ed5d5fb23169', '拉斐爾，你不興奮嗎？', 2, '694bf12e-29a9-4d44-9f00-d2b500a94086')
        ,('d71405af-2d77-4a6f-b2ef-911b60950c95', '您也會感到高興。', 2, 'e42be966-e1e4-4515-a118-29f8efa9251b')
        ; 
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DELETE FROM "translation" WHERE "phraseId" IN ( '2e5b8b2e-1a74-4496-9bd7-cb6e4757b04e'
        , '4c20aa13-e779-4539-a9fa-36f5b5a6ad61'
        , '1431552e-ef03-401a-93d8-49a8dc648edd'
        , 'f40d26fa-ab98-4eaf-a463-44b68f06b7a2'
        , '7391be86-2753-4f1f-b2c5-9421cef0d3e8'
        , 'f231ba1b-6faa-466d-91f7-5f8aa286a4ec'
        , 'fdfde0a9-5915-417b-a0f4-e566e0608609'
        , 'c47a8797-6e89-49c4-98f0-f3f4466ef631'
        , '0a2ad60e-6143-4094-a38c-4cc8ac5e72de'
        , '0507c52f-6693-4f90-8bb2-0ec6b37bb10b'
        , '12fb700a-b130-48b3-9aa8-c37c26ef468e'
        , 'fc22852e-e91f-4e32-bc1e-3f68328224d9'
        , 'a44bb66e-235c-4ac9-ae54-6d036f78c96c'
        , '3dc643fb-4fac-4166-bfcf-5a2f6e528e22'
        , '09a65cab-ad4f-4de0-82e4-1acdc4cec950'
        , '6548a0e6-1c2a-43f3-8d92-7c4ce99c6d59'
        , '0316eb73-3975-4fbd-b9dc-8e0c1aea7ccd'
        , '45aa71c7-f0fd-4f9b-af6b-7b41267534f8'
        , '694bf12e-29a9-4d44-9f00-d2b500a94086'
        , 'e42be966-e1e4-4515-a118-29f8efa9251b'
        );
        DELETE FROM "phrase" WHERE "lessonId" = '5bc812cb-0683-4dcf-8ed9-593f94d1d461';
        DELETE FROM "lesson" WHERE "id" = '5bc812cb-0683-4dcf-8ed9-593f94d1d461';
        `)
    }
}
