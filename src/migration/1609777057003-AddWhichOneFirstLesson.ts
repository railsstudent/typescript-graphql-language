import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddWhichOneFirstLesson1609777057003 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO "lesson"("id", "name", "languageId") values ('caa8b196-c515-433b-af12-673d01a6df20', 'Which one 1', '16744281-e1af-44f2-a67d-0cb04bd0d6a2');
        INSERT INTO "phrase"("id", "phrase", "lessonId") values ('162de4d3-d260-4720-a449-41dbe13b4e90', 'Mi perro no tiene una vida dura.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('6b280bb2-1365-4568-a427-11ef505e14e5', 'Ayer compramos pizzas para la fiesta.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('39952fa8-32a0-411d-91d1-9d05c92a43b4', '¿Estás usando esta silla?', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('c1823bc6-804b-442d-8eac-5120e89b7372', 'Es emocionante abrir muchos regalos.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('232f6600-e672-49b6-be4f-5a1a37241c6f', 'Estoy usando el boligrafo azul.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('d9557f1b-a581-4482-a339-4c7dca7122a7', 'Lo compramos ayer.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('7d39cabc-943a-48ce-8acf-b8c0985716ed', 'Duolingo tiene muchas oraciones graciosas.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('2775849e-e630-4031-b594-883d375c7f94', 'Ella encontró tus llaves', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('be546563-844f-41b9-80c4-cac8353345f4', 'Juan encontró un regalo para Miguel.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('1abaa153-b7bf-4ac6-9cc9-43e83ff53c11', 'Yo creo que esta clase es muy dura.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('94939c3b-6b0e-4837-80ef-ba78b99310d1', 'Estamos usando mi computadora', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('98f6f4b2-f47d-4cef-9218-57f5cc84ca9c', '¿Qué le compramos el año pasado?', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('38143dc3-b9b0-4f5b-bf01-f35bb59fa116', 'Pablo encontró unas camisas baratas.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('1abf1696-ffe1-48f2-a5cc-07c58ba198b8', '¿Puedes coger mi cartera marrón?', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('fa99e54a-a0b1-41d7-a0a2-60c64d3439bc', 'Creo que sí pero no estoy seguro.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('e4b04e7e-e70c-4555-97de-717dc8f5d76b', 'Cojo las camisas y las lavo después.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('8e3403b0-cdac-4543-9c86-9c27bb81ab99', 'Yo encontré una bici buena.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('5aba6931-857f-4f40-b00d-8a7a5fcc0479', '¿Necesitas la camiseta verde o la amarilla?', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('50ed6e60-b86b-43d0-b725-ffbb2f2e75b1', 'Yo cojo todo el dinero.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('8b03c13d-f810-46f1-89cb-2d334132aa17', 'Encontré una vieja carta en mi escritorio.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ,('d957365a-eaec-4158-b885-05e7cdc49c57', 'Nosotros cogemos la comida y ustedes cojen las bebidas.', 'caa8b196-c515-433b-af12-673d01a6df20')
        ;
        INSERT INTO "translation" ("id", "translation", "translationLanguageId", "phraseId") values ('82640b6a-9237-4204-bf01-ab113dda52b9', 'My dog does not have a hard life.', 1, '162de4d3-d260-4720-a449-41dbe13b4e90')
        ,('51542d78-4bc5-4be6-8ea8-23d7e1c18ce7', 'Yesterday we bought pizzas for the party.', 1, '6b280bb2-1365-4568-a427-11ef505e14e5')
        ,('42658f73-cb7c-4df5-9843-09f129cb2cf6', 'Are you using this chair?', 1, '39952fa8-32a0-411d-91d1-9d05c92a43b4')
        ,('54299ab0-f368-44fa-99a1-9c9f87d97974', 'It is exciting to open a lot of gifts.', 1, 'c1823bc6-804b-442d-8eac-5120e89b7372')
        ,('0073eb86-979f-47e4-b865-f51a1fd668e6', 'I am using the blue pen.', 1, '232f6600-e672-49b6-be4f-5a1a37241c6f')
        ,('40ef6830-34b1-4efe-8fe0-0edc4a781fc1', 'We bought it yesterday.', 1, 'd9557f1b-a581-4482-a339-4c7dca7122a7')
        ,('5a450328-e7cb-4e88-9636-8e9bb6346306', 'Duolingo has a lot of funny sentences.', 1, '7d39cabc-943a-48ce-8acf-b8c0985716ed')
        ,('908e4982-17d8-4633-be63-0cdfaa3b9cad', 'She found your key.', 1, '2775849e-e630-4031-b594-883d375c7f94')
        ,('05ddd695-2d5d-4c78-91d9-c6c1e52ace0a', 'Juan found a gift for Miguel.', 1, 'be546563-844f-41b9-80c4-cac8353345f4')
        ,('dbfc706c-d09c-4069-9fd5-70eadd7bfadf', 'I think that this class is very hard.', 1, '1abaa153-b7bf-4ac6-9cc9-43e83ff53c11')
        ,('ce157ce5-f2f5-45d0-93e8-51be5a13332b', 'We are using my computer.', 1, '94939c3b-6b0e-4837-80ef-ba78b99310d1')
        ,('e621569b-7d0e-4446-a0bb-b4e6def1f783', 'What did we buy her last year?', 1, '98f6f4b2-f47d-4cef-9218-57f5cc84ca9c')
        ,('66d3afe9-b855-4b50-ae7e-f2a462856536', 'Pablo found some cheap shirts.', 1, '38143dc3-b9b0-4f5b-bf01-f35bb59fa116')
        ,('3f2bd3c6-d490-4d19-ba08-937a28c7a2f1', 'Can you take my brown purse?', 1, '1abf1696-ffe1-48f2-a5cc-07c58ba198b8')
        ,('c4fa5b2a-b844-43b8-84b5-8f164ada795f', 'I think so, but I am not sure.', 1, 'fa99e54a-a0b1-41d7-a0a2-60c64d3439bc')
        ,('0d2d83a0-861b-40cd-84da-387cbb918964', 'I am taking the shirts and washing them later.', 1, 'e4b04e7e-e70c-4555-97de-717dc8f5d76b')
        ,('6acef053-3ef0-40d6-a702-68b2be4735c8', 'I found a good bike.', 1, '8e3403b0-cdac-4543-9c86-9c27bb81ab99')
        ,('8c09c592-d9c3-4acc-9479-b02cc7bcc044', 'Do you need the green T-shirt or the yellow one?', 1, '5aba6931-857f-4f40-b00d-8a7a5fcc0479')
        ,('8187444d-34c8-4483-a022-b599dac55734', 'I am taking all the money.', 1, '50ed6e60-b86b-43d0-b725-ffbb2f2e75b1')
        ,('51d76f21-ed09-48fb-b760-a959ab710be2', 'I found an old letter on my desk.', 1, '8b03c13d-f810-46f1-89cb-2d334132aa17')
        ,('26f4f578-d12e-405b-b4a4-8a0212e3971b', 'We are taking the food and you are taking the drinks.', 1, 'd957365a-eaec-4158-b885-05e7cdc49c57')
        ,('7b7048bd-2c4e-422c-839a-ad6f81ee0448', '我的狗沒有艱難的生活。', 2, '162de4d3-d260-4720-a449-41dbe13b4e90')
        ,('1ad3ff77-7f6b-4092-8138-c48eb34d2291', '昨天我們為聚會買了披薩。', 2, '6b280bb2-1365-4568-a427-11ef505e14e5')
        ,('19fd2e8e-7680-4084-ac99-010678e1e38d', '你在用這把椅子嗎？', 2, '39952fa8-32a0-411d-91d1-9d05c92a43b4')
        ,('a5afd5e6-f507-4a32-b1d2-a98e67ed5202', '打開很多禮物很令人興奮。', 2, 'c1823bc6-804b-442d-8eac-5120e89b7372')
        ,('22859e98-d6c6-43dc-a29b-0686dc132209', '我正在使用藍色的筆。', 2, '232f6600-e672-49b6-be4f-5a1a37241c6f')
        ,('ec03d8f3-911d-4d63-9162-c0e2eb98eac7', '我們昨天買的。', 2, 'd9557f1b-a581-4482-a339-4c7dca7122a7')
        ,('6bac5b8d-87c9-4d1a-9dac-bd56bc0fda2b', 'Duolingo有很多有趣的句子。', 2, '7d39cabc-943a-48ce-8acf-b8c0985716ed')
        ,('76bc75dc-5097-442a-8bb2-17945d2fe5fb', '她找到了你的鑰匙。', 2, '2775849e-e630-4031-b594-883d375c7f94')
        ,('0aafa527-28fb-4098-95d3-9ac7f44876c3', '胡安找到了禮物給米格爾。', 2, 'be546563-844f-41b9-80c4-cac8353345f4')
        ,('0d445450-aee8-480b-9d4b-02049966f3ea', '我認為這節課很難。', 2, '1abaa153-b7bf-4ac6-9cc9-43e83ff53c11')
        ,('36962495-35e2-45bb-910c-9965993b24c3', '我們正在使用我的電腦。', 2, '94939c3b-6b0e-4837-80ef-ba78b99310d1')
        ,('f3ec04f2-517e-4a1b-8aaf-10e832dac8a6', '去年我們買了她什麼？', 2, '98f6f4b2-f47d-4cef-9218-57f5cc84ca9c')
        ,('e258699f-2bcc-48c0-9049-d535bf077419', '巴勃羅發現了一些便宜的襯衫。', 2, '38143dc3-b9b0-4f5b-bf01-f35bb59fa116')
        ,('9f137d2b-4a6f-424b-9dd6-fc15fc12bc79', '你能拿走我的棕色錢包嗎？', 2, '1abf1696-ffe1-48f2-a5cc-07c58ba198b8')
        ,('edfa9f5f-b49a-49db-a3c2-904d8d8e4a64', '我是這樣認為的，但我不確定。', 2, 'fa99e54a-a0b1-41d7-a0a2-60c64d3439bc')
        ,('e045e5a1-2b53-4d26-897e-bd3e2d2e7611', '我正在拿襯衫，以後洗他們。', 2, 'e4b04e7e-e70c-4555-97de-717dc8f5d76b')
        ,('81f7d33b-5c7e-4c50-9746-e331477a5937', '我找到了一輛好自行車。', 2, '8e3403b0-cdac-4543-9c86-9c27bb81ab99')
        ,('8cda07e8-652d-4b93-acf5-ef9d31b05761', '您需要綠色的T恤衫還是黃色的T恤衫？', 2, '5aba6931-857f-4f40-b00d-8a7a5fcc0479')
        ,('ad6514c1-bd59-4470-81b1-5e256663b9a8', '我拿走了所有的錢。', 2, '50ed6e60-b86b-43d0-b725-ffbb2f2e75b1')
        ,('65e7121b-61b3-4c7f-812b-da885aa66b21', '我拿走了所有的錢。', 2, '8b03c13d-f810-46f1-89cb-2d334132aa17')
        ,('852f707b-c98d-4a9c-ad85-0d6831e9a978', '我們正在拿食物，而你正在拿飲料。', 2, 'd957365a-eaec-4158-b885-05e7cdc49c57')
        ; 
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DELETE FROM "translation" WHERE "phraseId" IN ( '162de4d3-d260-4720-a449-41dbe13b4e90'
        , '6b280bb2-1365-4568-a427-11ef505e14e5'
        , '39952fa8-32a0-411d-91d1-9d05c92a43b4'
        , 'c1823bc6-804b-442d-8eac-5120e89b7372'
        , '232f6600-e672-49b6-be4f-5a1a37241c6f'
        , 'd9557f1b-a581-4482-a339-4c7dca7122a7'
        , '7d39cabc-943a-48ce-8acf-b8c0985716ed'
        , '2775849e-e630-4031-b594-883d375c7f94'
        , 'be546563-844f-41b9-80c4-cac8353345f4'
        , '1abaa153-b7bf-4ac6-9cc9-43e83ff53c11'
        , '94939c3b-6b0e-4837-80ef-ba78b99310d1'
        , '98f6f4b2-f47d-4cef-9218-57f5cc84ca9c'
        , '38143dc3-b9b0-4f5b-bf01-f35bb59fa116'
        , '1abf1696-ffe1-48f2-a5cc-07c58ba198b8'
        , 'fa99e54a-a0b1-41d7-a0a2-60c64d3439bc'
        , 'e4b04e7e-e70c-4555-97de-717dc8f5d76b'
        , '8e3403b0-cdac-4543-9c86-9c27bb81ab99'
        , '5aba6931-857f-4f40-b00d-8a7a5fcc0479'
        , '50ed6e60-b86b-43d0-b725-ffbb2f2e75b1'
        , '8b03c13d-f810-46f1-89cb-2d334132aa17'
        , 'd957365a-eaec-4158-b885-05e7cdc49c57'
        );
        DELETE FROM "phrase" WHERE "lessonId" = 'caa8b196-c515-433b-af12-673d01a6df20';
        DELETE FROM "lesson" WHERE "id" = 'caa8b196-c515-433b-af12-673d01a6df20';
        `)
    }
}
