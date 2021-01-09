import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateWhichOne2Lesson1610205605105 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO "lesson"("id", "name", "languageId") values ('5f7a1661-3bad-4d51-a5ca-6bef8566f6a8', 'Which one 2', '16744281-e1af-44f2-a67d-0cb04bd0d6a2');
        INSERT INTO "phrase"("id", "phrase", "lessonId") values ('b05705c6-3c74-4380-9203-e8c53138ff8b', 'Mi perro no tiene una vida dura.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('dd2dcdd7-c705-4414-b37d-50971f975374', 'Ayer compramos pizzas para la fiesta.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('8e4cd0a3-6297-4b8d-a4cc-bcb396bf739d', '¿Estás usando esta silla?', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('b81fca72-6cbd-487a-96fd-9967d2dee5a7', 'Es emocionante abrir muchos regalos.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('16b5e5af-e10f-4907-97e5-b8b4f32dadaa', 'Estoy usando el boligrafo azul.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('f411d4c9-4f55-4a40-95ab-2ff4c0f773f7', 'Lo compramos ayer.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('038b40f2-67db-419b-97a7-8f1c6198faaa', 'Duolingo tiene muchas oraciones graciosas.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('803d5942-da85-4858-aaad-a0abbbdcb7a5', 'Ella encontró tus llaves', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('9ee3c8bf-b949-45f8-b2c0-fd883c2358be', 'Juan encontró un regalo para Miguel.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('2f13cc81-d0e6-4d17-8535-22671ce56fbe', 'Yo creo que esta clase es muy dura.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('70a83448-e9cf-4252-87b0-582edbd82a06', 'Estamos usando mi computadora', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('63feb5f8-b3f8-482e-bcc3-15caa3d96da0', '¿Qué le compramos el año pasado?', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('7dd4a0f0-a38f-4efa-9559-5a908a2f1a97', 'Pablo encontró unas camisas baratas.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('b2bf5d4a-33fc-48f3-92be-23caf97b2ec9', '¿Puedes coger mi cartera marrón?', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('9acc5550-f839-48a8-bb90-69624dbfa0c3', 'Creo que sí pero no estoy seguro.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('d5a8084d-6cae-4fdb-b29f-0d861f301447', 'Cojo las camisas y las lavo después.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('18faf2a9-62f9-40e5-a396-f9afe696ef49', 'Yo encontré una bici buena.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('59f76bd3-a298-470c-bb09-f3cd10a5b1b6', '¿Necesitas la camiseta verde o la amarilla?', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('8eec5ca2-e583-4952-a870-6ea3363fdc8a', 'Yo cojo todo el dinero.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('3e6917ca-5c36-4cc3-8d48-ed64807ecf22', 'Encontré una vieja carta en mi escritorio.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ,('8d50d7e5-5ba2-4d93-a7c5-590fa7491a3f', 'Nosotros cogemos la comida y ustedes cojen las bebidas.', '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8')
        ;
        INSERT INTO "translation" ("id", "translation", "translationLanguageId", "phraseId") values ('fa4e77fd-e295-46a0-9cce-76d483e8b0e6', 'My dog does not have a hard life.', 1, 'b05705c6-3c74-4380-9203-e8c53138ff8b')
        ,('e4983e80-3792-4ee0-ad13-beef8d65e627', 'Yesterday we bought pizzas for the party.', 1, 'dd2dcdd7-c705-4414-b37d-50971f975374')
        ,('ac7c4aa6-9c3f-4621-bdb5-c46be6d0ff18', 'Are you using this chair?', 1, '8e4cd0a3-6297-4b8d-a4cc-bcb396bf739d')
        ,('6d0be3e0-f834-4c26-834c-8ac99f01801d', 'It is exciting to open a lot of gifts.', 1, 'b81fca72-6cbd-487a-96fd-9967d2dee5a7')
        ,('5d91c44f-ea23-4a56-9441-eaa1269d8d5b', 'I am using the blue pen.', 1, '16b5e5af-e10f-4907-97e5-b8b4f32dadaa')
        ,('8a2ae1ec-4d27-452e-8e85-41b107624c76', 'We bought it yesterday.', 1, 'f411d4c9-4f55-4a40-95ab-2ff4c0f773f7')
        ,('b2356b05-7d1c-4cbc-a48b-a125240c8a25', 'Duolingo has a lot of funny sentences.', 1, '038b40f2-67db-419b-97a7-8f1c6198faaa')
        ,('702218ab-b568-4c42-b9d7-4664ae086466', 'She found your key.', 1, '803d5942-da85-4858-aaad-a0abbbdcb7a5')
        ,('bed18828-99e8-4054-9b11-eeeaec48f8dc', 'Juan found a gift for Miguel.', 1, '9ee3c8bf-b949-45f8-b2c0-fd883c2358be')
        ,('e7ccf701-41ac-432e-9048-41080f200895', 'I think that this class is very hard.', 1, '2f13cc81-d0e6-4d17-8535-22671ce56fbe')
        ,('a4cab9b8-5953-4abe-816d-e448528ceffd', 'We are using my computer.', 1, '70a83448-e9cf-4252-87b0-582edbd82a06')
        ,('77db6570-e79d-418a-be98-97a002eae766', 'What did we buy her last year?', 1, '63feb5f8-b3f8-482e-bcc3-15caa3d96da0')
        ,('15fa8407-da18-4540-84a7-1c910149d93a', 'Pablo found some cheap shirts.', 1, '7dd4a0f0-a38f-4efa-9559-5a908a2f1a97')
        ,('40014db4-d32d-46fe-80fe-1c6c6d61eebc', 'Can you take my brown purse?', 1, 'b2bf5d4a-33fc-48f3-92be-23caf97b2ec9')
        ,('3bf831ef-0b3a-456c-b10c-4f6b2f2cf953', 'I think so, but I am not sure.', 1, '9acc5550-f839-48a8-bb90-69624dbfa0c3')
        ,('a962ce1c-f98e-4d47-936a-2c4b25136bf5', 'I am taking the shirts and washing them later.', 1, 'd5a8084d-6cae-4fdb-b29f-0d861f301447')
        ,('562018c5-3b70-406d-bdf2-7f628d497356', 'I found a good bike.', 1, '18faf2a9-62f9-40e5-a396-f9afe696ef49')
        ,('732559bb-d1f6-45d9-b908-4fb808209308', 'Do you need the green T-shirt or the yellow one?', 1, '59f76bd3-a298-470c-bb09-f3cd10a5b1b6')
        ,('f6887ed4-c724-4130-ba54-148039a502bd', 'I am taking all the money.', 1, '8eec5ca2-e583-4952-a870-6ea3363fdc8a')
        ,('734526a7-0976-40f3-96af-854a22300d75', 'I found an old letter on my desk.', 1, '3e6917ca-5c36-4cc3-8d48-ed64807ecf22')
        ,('0938671d-49de-4121-afb9-e009be39d8ab', 'We are taking the food and you are taking the drinks.', 1, '8d50d7e5-5ba2-4d93-a7c5-590fa7491a3f')
        ,('c5dafea6-cea2-4a9a-9e96-c497c253f858', '我的狗沒有艱難的生活。', 2, 'b05705c6-3c74-4380-9203-e8c53138ff8b')
        ,('d4054935-c345-4aba-a94e-7ed68fc4f8dd', '昨天我們為聚會買了披薩。', 2, 'dd2dcdd7-c705-4414-b37d-50971f975374')
        ,('25860553-df26-4816-a72c-c5f35fda09c2', '你在用這把椅子嗎？', 2, '8e4cd0a3-6297-4b8d-a4cc-bcb396bf739d')
        ,('c6a0d3e9-5305-432f-b243-cadc8d46f42b', '打開很多禮物很令人興奮。', 2, 'b81fca72-6cbd-487a-96fd-9967d2dee5a7')
        ,('3015c90b-3f44-4a11-869c-cae7ece99a4a', '我正在使用藍色的筆。', 2, '16b5e5af-e10f-4907-97e5-b8b4f32dadaa')
        ,('2aa3d3b9-4607-436e-b451-c130fcc27eed', '我們昨天買的。', 2, 'f411d4c9-4f55-4a40-95ab-2ff4c0f773f7')
        ,('78d61281-cb81-4f10-acc5-9c6311760fae', 'Duolingo有很多有趣的句子。', 2, '038b40f2-67db-419b-97a7-8f1c6198faaa')
        ,('d846c17d-3a38-4755-85b8-ae6821b117a8', '她找到了你的鑰匙。', 2, '803d5942-da85-4858-aaad-a0abbbdcb7a5')
        ,('9ee96ce0-e843-4dfd-816d-960620a78d32', '胡安找到了禮物給米格爾。', 2, '9ee3c8bf-b949-45f8-b2c0-fd883c2358be')
        ,('81cdfb59-ede7-4f82-8226-fd193d73e943', '我認為這節課很難。', 2, '2f13cc81-d0e6-4d17-8535-22671ce56fbe')
        ,('11ebee19-6743-4ef7-bee6-78b3bbf2d48f', '我們正在使用我的電腦。', 2, '70a83448-e9cf-4252-87b0-582edbd82a06')
        ,('094166c0-a266-49f8-850a-f8ca8b839937', '去年我們買了她什麼？', 2, '63feb5f8-b3f8-482e-bcc3-15caa3d96da0')
        ,('efd968c4-6dbb-4705-8a04-d71bb807302d', '巴勃羅發現了一些便宜的襯衫。', 2, '7dd4a0f0-a38f-4efa-9559-5a908a2f1a97')
        ,('87a9733b-c1c6-4329-9bc2-90dc42cfe37d', '你能拿走我的棕色錢包嗎？', 2, 'b2bf5d4a-33fc-48f3-92be-23caf97b2ec9')
        ,('6ae1589a-34a0-4e5e-bd0a-6eba641f7776', '我是這樣認為的，但我不確定。', 2, '9acc5550-f839-48a8-bb90-69624dbfa0c3')
        ,('55aa97a1-3cf0-42d0-86ea-bc62a1674e70', '我正在拿襯衫，以後洗他們。', 2, 'd5a8084d-6cae-4fdb-b29f-0d861f301447')
        ,('e7317fb7-af8d-4552-bc34-5331d881032f', '我找到了一輛好自行車。', 2, '18faf2a9-62f9-40e5-a396-f9afe696ef49')
        ,('4ba8eea8-d008-4a1a-b236-7e4e8b5a6287', '您需要綠色的T恤衫還是黃色的T恤衫？', 2, '59f76bd3-a298-470c-bb09-f3cd10a5b1b6')
        ,('f57d8f14-df14-4cfb-945c-3048b33f6079', '我拿走了所有的錢。', 2, '8eec5ca2-e583-4952-a870-6ea3363fdc8a')
        ,('4b3a0851-9466-4aed-86b9-5c818c41ddc4', '我拿走了所有的錢。', 2, '3e6917ca-5c36-4cc3-8d48-ed64807ecf22')
        ,('f06361e7-6433-4826-b2f3-13061b9d7dd0', '我們正在拿食物，而你正在拿飲料。', 2, '8d50d7e5-5ba2-4d93-a7c5-590fa7491a3f')
        ; 
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM "translation" WHERE "phraseId" IN ( 'b05705c6-3c74-4380-9203-e8c53138ff8b'
            , 'dd2dcdd7-c705-4414-b37d-50971f975374'
            , '8e4cd0a3-6297-4b8d-a4cc-bcb396bf739d'
            , 'b81fca72-6cbd-487a-96fd-9967d2dee5a7'
            , '16b5e5af-e10f-4907-97e5-b8b4f32dadaa'
            , 'f411d4c9-4f55-4a40-95ab-2ff4c0f773f7'
            , '038b40f2-67db-419b-97a7-8f1c6198faaa'
            , '803d5942-da85-4858-aaad-a0abbbdcb7a5'
            , '9ee3c8bf-b949-45f8-b2c0-fd883c2358be'
            , '2f13cc81-d0e6-4d17-8535-22671ce56fbe'
            , '70a83448-e9cf-4252-87b0-582edbd82a06'
            , '63feb5f8-b3f8-482e-bcc3-15caa3d96da0'
            , '7dd4a0f0-a38f-4efa-9559-5a908a2f1a97'
            , 'b2bf5d4a-33fc-48f3-92be-23caf97b2ec9'
            , '9acc5550-f839-48a8-bb90-69624dbfa0c3'
            , 'd5a8084d-6cae-4fdb-b29f-0d861f301447'
            , '18faf2a9-62f9-40e5-a396-f9afe696ef49'
            , '59f76bd3-a298-470c-bb09-f3cd10a5b1b6'
            , '8eec5ca2-e583-4952-a870-6ea3363fdc8a'
            , '3e6917ca-5c36-4cc3-8d48-ed64807ecf22'
            , '8d50d7e5-5ba2-4d93-a7c5-590fa7491a3f'
            );
            DELETE FROM "phrase" WHERE "lessonId" = '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8';
            DELETE FROM "lesson" WHERE "id" = '5f7a1661-3bad-4d51-a5ca-6bef8566f6a8';
            `)
    }
}
