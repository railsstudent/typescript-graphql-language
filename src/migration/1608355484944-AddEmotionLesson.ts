import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddEmotionLesson1608355484944 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "lesson"("id", "name", "languageId") values 
            ('7b8b8010-5e26-49c3-bf6c-29e60a6fbf18', 'Emotion', '16744281-e1af-44f2-a67d-0cb04bd0d6a2')
        `)

        await queryRunner.query(
            `INSERT INTO "phrase"("id", "phrase", "lessonId") values 
                ('0b108388-f8b8-4703-a45f-e1548e9e20f8', 'Estoy contento con mis zapatos', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')
                ,('1a554f55-6c45-4637-9b01-3378fc897acb', 'Tú estás preocupado por la prueba', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18') 
                ,('3d953e01-b422-4ac5-ba85-be924a44f224', 'El bebé está enfermo y necesita más leche', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')
                ,('ea6c0854-766a-4bd7-b318-f328e540979f', 'La chica tiene un perro y está muy emocionada', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18') 
                ,('310bfaf5-9040-4e6d-baa0-f76e1847e1a1', 'Estoy muy emocionado', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')
                ,('98072cbc-54bc-4ef9-aa97-e64527b62d24', 'Me siento muy contento contigo, Ana', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')
                ,('bd4e9f0e-2732-4798-a236-99f2ee30612c', '¿Te sientes enfermo, Roberto?', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')  
                ,('6b63beaf-427e-4f23-b451-b0d3dfbd9762', 'Mi hermana siempre está aburrida', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18') 
                ,('cc2c24f8-2bcd-4085-a8fb-6ac5bceb69d6', 'Carla, ¿cómo está tu bebé esta mañana?', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')  
                ,('5d03b6a5-ee6e-494f-a992-8fa15e6cae89', '¿El señor Pérez está contento con su trabajo?', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')
                ,('d01c16bd-4b0c-4317-ad14-442dcc01b5f3', 'Es el fin de semana y estoy muy contento', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')  
                ,('ca41faf6-5c56-4a9c-9844-27eef9126986', '¿Te sientes mejor hoy, Bruno?', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')  
                ,('8f38344c-9d3c-4e50-b20a-6be15060b930', 'Ellos no son simpáticos conmigo', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')  
                ,('1f065ee6-ffe0-4580-8693-e1ffd386d0f6', 'Sara, ¿por qué te sientes triste?', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')  
                ,('1f065ee6-ffe0-4580-8693-e1ffd386d0f6', 'Ana siempre está feliz en la clase de francés', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')  
                ,('1f065ee6-ffe0-4580-8693-e1ffd386d0f6', 'Lo siento, estoy muy aburrido en este concierto', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18') 
                ,('1f065ee6-ffe0-4580-8693-e1ffd386d0f6', 'Siempre me siento cansado', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18') 
                ,('1f065ee6-ffe0-4580-8693-e1ffd386d0f6', 'A veces me siento un poco cansada en la mañana', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18') 
                ,('1f065ee6-ffe0-4580-8693-e1ffd386d0f6', 'Rafael, ¿no estás emocionado?', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')  
                ,('1f065ee6-ffe0-4580-8693-e1ffd386d0f6', 'También te sientes feliz', '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18')  
                ;
            `,
        )

        await queryRunner.query(
            `INSERT INTO "translation" ("id", "translation", "translationLanguageId", "phraseId") values
                ('4f2db52a-8f72-4ef4-87b9-072ed64bf32f', 'I am happy with my shoes', 1, '0b108388-f8b8-4703-a45f-e1548e9e20f8')
                ,('e59b4628-0e13-4228-8eb4-f861d9896a65', 'You are worried about the test', 1, '1a554f55-6c45-4637-9b01-3378fc897acb')
                ,('c113fecb-0cfe-442f-8e84-635ad13a6480', 'The baby is sick and needs more milk', 1, '3d953e01-b422-4ac5-ba85-be924a44f224')
                ,('396f55a4-c626-41ea-ada9-4b71894b52cb', 'The girl has a doy and is very excited', 1, 'ea6c0854-766a-4bd7-b318-f328e540979f')
                ,('1a6ea4e0-bd24-4e50-9b05-0afa90bf8e98', 'I am very excited', 1, '310bfaf5-9040-4e6d-baa0-f76e1847e1a1')
                ,('4f9720b1-7947-4c1e-976d-8cec9e29271d', 'I feel very happy with you, Ana', 1, '98072cbc-54bc-4ef9-aa97-e64527b62d24')
                ,('1995cecf-4ec0-40ea-946e-57a307a60810', 'Do you feel sick, Roberto?', 1, 'bd4e9f0e-2732-4798-a236-99f2ee30612c')
                ,('fffb6aa5-5aca-4360-a2e4-c34e57b0850f', 'My sister is always bored', 1, '6b63beaf-427e-4f23-b451-b0d3dfbd9762')
                ,('5a914fff-1b8f-466f-a44e-04dc10c26bd4', 'Carla, how is your baby this morning?', 1, 'cc2c24f8-2bcd-4085-a8fb-6ac5bceb69d6')
                ,('16e84762-01fb-446f-8cba-b1db1a1d8ce4', 'Is Mr. Pérez happy with his job?', 1, '5d03b6a5-ee6e-494f-a992-8fa15e6cae89')
                ,('6a345aac-5272-4ee7-9527-5418bd61183d', 'It is the weekend and I am very happy', 1, 'd01c16bd-4b0c-4317-ad14-442dcc01b5f3')
                ,('da280eec-e716-4818-b48e-c1ad8d47d3d0', 'Do you feel better today, Bruno?', 1, 'ca41faf6-5c56-4a9c-9844-27eef9126986')
                ,('cdb1d345-eec4-45dd-829f-83a3d35edb37', 'They are not nice to me', 1, '8f38344c-9d3c-4e50-b20a-6be15060b930')
                ,('b6a482c9-0936-4381-b461-da8b82090347', 'Sara, why do you feel sad?', 1, '1f065ee6-ffe0-4580-8693-e1ffd386d0f6')
                ,('b6a482c9-0936-4381-b461-da8b82090347', 'Ana is always happy in French class', 1, '1f065ee6-ffe0-4580-8693-e1ffd386d0f6')
                ,('b6a482c9-0936-4381-b461-da8b82090347', 'I am sorry, I am very bored at this concert', 1, '1f065ee6-ffe0-4580-8693-e1ffd386d0f6')
                ,('b6a482c9-0936-4381-b461-da8b82090347', 'I always feel tired', 1, '1f065ee6-ffe0-4580-8693-e1ffd386d0f6')
                ,('b6a482c9-0936-4381-b461-da8b82090347', 'Sometimes I feel a little tired in the morning', 1, '1f065ee6-ffe0-4580-8693-e1ffd386d0f6')
                ,('b6a482c9-0936-4381-b461-da8b82090347', 'Rafael, aren't you excited?', 1, '1f065ee6-ffe0-4580-8693-e1ffd386d0f6')
                ,('b6a482c9-0936-4381-b461-da8b82090347', 'You also feel happy', 1, '1f065ee6-ffe0-4580-8693-e1ffd386d0f6')
                
                ,('ac973735-8e77-4c6e-a065-090b9a3ebed9', '我叫瑪麗', 2, '0b108388-f8b8-4703-a45f-e1548e9e20f8')
                ,('5236000a-5658-43a7-9755-7a57cbc0eee2', '你叫瑪麗', 2, '1a554f55-6c45-4637-9b01-3378fc897acb')
                ,('1ae959d4-4e63-41a9-96e7-e9cae4c0ffd8', '她的名字叫瑪麗', 2, '3d953e01-b422-4ac5-ba85-be924a44f224')
                ,('45e295bd-78a5-4852-8e23-308eb0f5a939', '他的名字叫約翰', 2, 'ea6c0854-766a-4bd7-b318-f328e540979f')
                ,('21dc0a64-b28c-4f26-8e26-764172fe0225', '他們的名字叫約翰和瑪麗', 2, '310bfaf5-9040-4e6d-baa0-f76e1847e1a1')
                ,('9d1e4196-0388-4ac1-8765-476dca578b7f', '我是加拿大人，我來自加拿大', 2, '98072cbc-54bc-4ef9-aa97-e64527b62d24')
                ,('cabad732-ae06-4069-8aeb-c0439a637622', '他是墨西哥人，來自墨西哥', 2, 'bd4e9f0e-2732-4798-a236-99f2ee30612c')
                ,('69d872b4-55a4-4a6f-ab06-9426670de09d', '她是墨西哥人，來自墨西哥', 2, '6b63beaf-427e-4f23-b451-b0d3dfbd9762')
                ,('a51d45ac-d2b0-4711-833c-07d1db65b1da', '他和我是美國人，我們來自美國', 2, 'cc2c24f8-2bcd-4085-a8fb-6ac5bceb69d6')
                ,('7a2971c9-a65a-4646-8254-926b0b3bb383', '她和我是美國人，我們來自美國', 2, '5d03b6a5-ee6e-494f-a992-8fa15e6cae89')
                ,('773f46e3-75fe-42b7-95da-b7602ab0c5ad', '他們是英國人，他們來自英國', 2, 'd01c16bd-4b0c-4317-ad14-442dcc01b5f3')
                ,('89ca63d2-5dd9-4e78-b01e-5286f409489f', '她們是英國人，她們來自英國', 2, 'ca41faf6-5c56-4a9c-9844-27eef9126986')
                ,('7a80fac7-69e6-4726-ae37-9ff62fb4ea65', '我們是西班牙人，我們來自西班牙', 2, '8f38344c-9d3c-4e50-b20a-6be15060b930')
                ,('41771345-434a-4ced-96c8-3ba619eae05c', '我們是西班牙人，我們來自西班牙', 2, '1f065ee6-ffe0-4580-8693-e1ffd386d0f6')
                ;
            `,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "translation" WHERE "phraseId" IN (
            '0b108388-f8b8-4703-a45f-e1548e9e20f8'
            ,'1a554f55-6c45-4637-9b01-3378fc897acb'
            ,'3d953e01-b422-4ac5-ba85-be924a44f224'
            ,'ea6c0854-766a-4bd7-b318-f328e540979f'
            ,'310bfaf5-9040-4e6d-baa0-f76e1847e1a1'
            ,'98072cbc-54bc-4ef9-aa97-e64527b62d24'
            ,'bd4e9f0e-2732-4798-a236-99f2ee30612c'
            ,'6b63beaf-427e-4f23-b451-b0d3dfbd9762'
            ,'cc2c24f8-2bcd-4085-a8fb-6ac5bceb69d6'
            ,'5d03b6a5-ee6e-494f-a992-8fa15e6cae89'
            ,'d01c16bd-4b0c-4317-ad14-442dcc01b5f3'
            ,'ca41faf6-5c56-4a9c-9844-27eef9126986'
            ,'8f38344c-9d3c-4e50-b20a-6be15060b930'
            ,'1f065ee6-ffe0-4580-8693-e1ffd386d0f6'
        )`)
        await queryRunner.query(`DELETE FROM "phrase" WHERE "lessonId" = '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18'`)
        await queryRunner.query(`DELETE FROM "lesson" WHERE "id" = '7b8b8010-5e26-49c3-bf6c-29e60a6fbf18'`)
    }
}
