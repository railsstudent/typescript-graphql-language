import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Translation, PaginatedTranslation, Phrase, TranslateLanguage } from '../entity'
import { TranslationPaginatedArgs, AddTranslationInput, UpdateTranslationInput } from './../types'

@Service()
export class TranslateService {
    constructor(
        @InjectRepository(Translation)
        private readonly translateRepository: Repository<Translation>,
        @InjectRepository(Phrase)
        private readonly phraseRepository: Repository<Phrase>,
        @InjectRepository(TranslateLanguage)
        private readonly translateLanguageRepository: Repository<TranslateLanguage>,
    ) {}

    async getPaginatedTranslations(args: TranslationPaginatedArgs): Promise<PaginatedTranslation> {
        try {
            const { page, take, phraseId } = args
            let query = await this.translateRepository
                .createQueryBuilder('translation')
                .innerJoin('translation.phrase', 'phrase')
                .where('phrase.id = :phraseId', { phraseId })

            if (page >= 0 && take >= 0) {
                query = query.skip(page * take).take(take)
            }

            const [translations, total] = await query.getManyAndCount()

            return {
                translations,
                total,
            }
        } catch (e) {
            console.log(e)
            return { translations: [], total: 0 }
        }
    }

    async isUniqueTranslation(phrase: Phrase, tranlsateLanguage: TranslateLanguage, translate: string) {
        // const { id: lessonId, name } = lesson
        const { id: phraseId, phrase: strPhrase } = phrase
        const { id: translateLanguageId } = tranlsateLanguage

        // // check uniqueness of translation
        const isUnique =
            (await this.translateRepository
                .createQueryBuilder('translate')
                .innerJoin('translate.phrase', 'phrase')
                .innerJoin('translate.translationLanguage', 'translationLanguage')
                .where('phrase.id = :phraseId', { phraseId })
                .andWhere('translationLanguage.id = :translateLanguageId', { translateLanguageId })
                .andWhere('translate.translation = :translate', { translate })
                .getCount()) <= 0

        if (!isUnique) {
            throw new Error(`Translation "${translate}" has already defined for phrase:  ${strPhrase}`)
        }

        return isUnique
    }

    async addTranslation(data: AddTranslationInput): Promise<Translation> {
        const { translation, translationLanguageId, phraseId } = data
        if (!translation) {
            throw new Error('Translation is missing')
        }

        if (!translationLanguageId) {
            throw new Error('Translation language id is missing')
        }

        if (!phraseId) {
            throw new Error('Phrase id is missing')
        }

        const phrase = await this.phraseRepository.findOneOrFail(phraseId)
        const tranLanguage = await this.translateLanguageRepository.findOneOrFail(translationLanguageId)

        // check uniqueness of translation
        await this.isUniqueTranslation(phrase, tranLanguage, translation)

        return await this.translateRepository.save(
            await this.translateRepository.create({
                translation,
                phrase,
                translationLanguage: tranLanguage,
            }),
        )
    }

    async updateTranslate(_data: UpdateTranslationInput): Promise<Translation | undefined> {
        // const { id, translation = null, translationLanguageId = null, phraseId = null } = data
        // if (!id) {
        //     throw new Error('Translation id is missing')
        // }

        // const query = this.translateRepository.createQueryBuilder('translation')
        // query.

        // const lesson = await this.lessonRepository
        //     .createQueryBuilder('lesson')
        //     .innerJoin('lesson.phrases', 'phrases')
        //     .where('phrases.id = :id', { id })
        //     .getOne()

        // if (!lesson) {
        //     throw new Error('Lesson does not exist')
        // }

        // // check uniqueness of phrase
        // await this.isUniquePhrase(lesson, phrase)
        // await this.phraseRepository.update(id, { phrase })

        // return await this.translateRepository.findOne(id)
        return undefined
    }

    async getTranslationLanguage(translation: Translation): Promise<TranslateLanguage | undefined> {
        const retTranslation = await this.translateRepository
            .createQueryBuilder('translation')
            .innerJoinAndSelect('translation.translationLanguage', 'translationLanguage')
            .where('translation.id = :translationId', { translationId: translation.id })
            .getOne()

        return await retTranslation?.translationLanguage
    }

    async getPhrase(translation: Translation): Promise<Phrase | undefined> {
        return await this.phraseRepository
            .createQueryBuilder('phrase')
            .innerJoin('phrase.translations', 'translations')
            .where('translations.id = :translationId', { translationId: translation.id })
            .getOne()
    }
}
