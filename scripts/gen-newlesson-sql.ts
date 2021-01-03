import { v4 as uuidv4 } from 'uuid'

function createStatements() {
    const lesson = 'Which one 1'
    const phrases = [
        'Mi perro no tiene una vida dura.',
        'Ayer compramos pizzas para la fiesta.',
        '¿Estás usando esta silla?',
        'Es emocionante abrir muchos regalos.',
        'Estoy usando el boligrafo azul.',
        'Lo compramos ayer.',
        'Duolingo tiene muchas oraciones graciosas.',
        'Ella encontró tus llaves',
        'Juan encontró un regalo para Miguel.',
        'Yo creo que esta clase es muy dura.',
        'Estamos usando mi computadora',
        '¿Qué le compramos el año pasado?',
        'Pablo encontró unas camisas baratas.',
        '¿Puedes coger mi cartera marrón?',
        'Creo que sí pero no estoy seguro.',
        'Cojo las camisas y las lavo después.',
        'Yo encontré una bici buena.',
        '¿Necesitas la camiseta verde o la amarilla?',
        'Yo cojo todo el dinero.',
        'Encontré una vieja carta en mi escritorio.'
    ]

    const phraseIds = []
    const lessonId = uuidv4()
    const translations = {
        1: [
            'My dog does not have a hard life.',
            'Yesterday we bought pizzas for the party.',
            'Are you using this chair?',
            'It is exciting to open a lot of gifts',
            'I am using the blue pen.',
            'We bought it yesterday.',
            'Duolingo has a lot of funny sentences',
            'She found your key.',
            'Juan found a gift for Miguel.',
            'I think that this class is very hard.',
            'We are using my computer.',
            'What did we buy her last year?',
            'Pablo found some cheap shirts.',
            'Can you take my brown purse?',
            'I think so, but I am not sure.',
            'I am taking the shirts and washing them later.',
            'I found a good bike.',
            'Do you need the green T-shirt or the yellow one?',
            'I am taking all the money.',
            'I found an old letter on my desk.'
        ],
        2: [
            'My dog does not have a hard life.',
            'Yesterday we bought pizzas for the party.',
            'Are you using this chair?',
            'It is exciting to open a lot of gifts',
            'I am using the blue pen.',
            'We bought it yesterday.',
            'Duolingo has a lot of funny sentences',
            'She found your key.',
            'Juan found a gift for Miguel.',
            'I think that this class is very hard.',
            'We are using my computer.',
            'What did we buy her last year?',
            'Pablo found some cheap shirts.',
            'Can you take my brown purse?',
            'I think so, but I am not sure.',
            'I am taking the shirts and washing them later.',
            'I found a good bike.',
            'Do you need the green T-shirt or the yellow one?',
            'I am taking all the money.',
            'I found an old letter on my desk.'
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
