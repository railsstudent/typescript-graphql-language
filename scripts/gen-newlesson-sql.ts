import { v4 as uuidv4 } from 'uuid'

function createStatements() {
    const lesson = 'Emotion'
    const phrases = [
        'Estoy contento con mis zapatos',
        'Tú estás preocupado por la prueba',
        'El bebé está enfermo y necesita más leche',
        'La chica tiene un perro y está muy emocionada',
        'Estoy muy emocionado',
        'Me siento muy contento contigo, Ana',
        '¿Te sientes enfermo, Roberto?',
        'Mi hermana siempre está aburrida',
        'Carla, ¿cómo está tu bebé esta mañana?',
        '¿El señor Pérez está contento con su trabajo?',
        'Es el fin de semana y estoy muy contento',
        '¿Te sientes mejor hoy, Bruno?',
        'Ellos no son simpáticos conmigo',
        'Sara, ¿por qué te sientes triste?',
        'Ana siempre está feliz en la clase de francés',
        'Lo siento, estoy muy aburrido en este concierto',
        'Siempre me siento cansado',
        'A veces me siento un poco cansada en la mañana',
        'Rafael, ¿no estás emocionado?',
        'También te sientes feliz',
    ]

    const phraseIds = []
    const lessonId = uuidv4()
    const translations = {
        1: [
            'I am happy with my shoes.',
            'You are worried about the test.',
            'The baby is sick and needs more milk.',
            'The girl has a dog and is very excited.',
            'I am very excited.',
            'I feel very happy with you, Ana.',
            'Do you feel sick, Roberto?',
            'My sister is always bored.',
            'Carla, how is your baby this morning?',
            'Is Mr. Pérez happy with his job?',
            'It is the weekend and I am very happy.',
            'Do you feel better today, Bruno?',
            'They are not nice to me.',
            'Sara, why do you feel sad?',
            'Ana is always happy in French class.',
            'I am sorry, I am very bored at this concert.',
            'I always feel tired.',
            'Sometimes I feel a little tired in the morning.',
            "Rafael, aren't you excited?",
            'You also feel happy.',
        ],
        2: [
            '我對我的鞋子很滿意',
            '您擔心測試。',
            '嬰兒病了，需要更多的牛奶。',
            '這個女孩有一隻狗，她非常興奮。',
            '我非常興奮。',
            '我對您感到非常高興，安娜。',
            '羅伯托，你感到不舒服嗎？',
            '我姐姐總是很無聊。',
            '卡拉，你的寶寶今天早上好嗎？',
            '佩雷斯先生對他的工作滿意嗎？',
            '這是周末，我很高興。',
            '布魯諾，你今天感覺好點了嗎？',
            '他們對我不好。',
            '薩拉，你為什麼感到難過？',
            '安娜在法語課上總是很快樂。',
            '對不起，這場音樂會我很無聊。',
            '我總是很累。',
            '我早上有時候會有點累。',
            '拉斐爾，你不興奮嗎？',
            '您也會感到高興。',
        ],
    }

    const phraseTuples = []
    phrases.forEach((phrase) => {
        const id = uuidv4()
        phraseIds.push(id)
        phraseTuples.push(`('${id}', '${phrase}', '${lessonId}')\n`)
    })

    const translationTuples = []
    for (const translateLangId of Object.keys(translations)) {
        const translationArray = translations[translateLangId]
        for (let i = 0; i < translationArray.length; i++) {
            const id = uuidv4()
            const phraseId = phraseIds[i]
            translationTuples.push(
                `('${id}', '${translationArray[i].replace("'", "''")}', ${translateLangId}, '${phraseId}')\n`,
            )
        }
    }

    const insertLessonStmt = `INSERT INTO "lesson"("id", "name", "languageId") values ('${lessonId}', '${lesson}', '16744281-e1af-44f2-a67d-0cb04bd0d6a2');`
    const insertPhrasesStmt = `INSERT INTO "phrase"("id", "phrase", "lessonId") values ${phraseTuples.join(',')};`
    const insertTranslationsStmt = `INSERT INTO "translation" ("id", "translation", "translationLanguageId", "phraseId") values ${translationTuples.join(
        ',',
    )}; `

    return {
        lessonId,
        phraseIds,
        insertLessonStmt,
        insertPhrasesStmt,
        insertTranslationsStmt,
    }
}

const deleteStatements = ({ lessonId, phraseIds }) => {
    const deleteLessonStmt = `DELETE FROM "lesson" WHERE "id" = '${lessonId}';`
    const deletePharseStmt = `DELETE FROM "phrase" WHERE "lessonId" = '${lessonId}';`

    const joinedPhraseIds = phraseIds.reduce((acc, phraseId) => {
        return `${acc}, '${phraseId}'\n`
    }, '')
    const deleteTranslationStmt = `DELETE FROM "translation" WHERE "phraseId" IN (${joinedPhraseIds.slice(1)});`

    return {
        deleteLessonStmt,
        deletePharseStmt,
        deleteTranslationStmt,
    }
}

const createStmtInfo = createStatements()
const deleteStmtInfo = deleteStatements(createStmtInfo)

const {
    insertLessonStmt: insertLessonSql,
    insertPhrasesStmt: insertPhraseSql,
    insertTranslationsStmt: insertTranslationSql,
} = createStmtInfo
console.log(insertLessonSql)
console.log(insertPhraseSql)
console.log(insertTranslationSql)

const {
    deleteLessonStmt: deleteLessonSql,
    deletePharseStmt: deletePhraseSql,
    deleteTranslationStmt: deleteTranslationSql,
} = deleteStmtInfo
console.log(deleteTranslationSql)
console.log(deletePhraseSql)
console.log(deleteLessonSql)
