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

    async isUniqueTranslation(phrase: Phrase, translateLanguage: TranslateLanguage) {
        const { id: phraseId, phrase: strPhrase } = phrase
        const { id: translateLanguageId } = translateLanguage

        // // check uniqueness of translation
        const isUnique =
            (await this.translateRepository
                .createQueryBuilder('translate')
                .innerJoin('translate.phrase', 'phrase')
                .innerJoin('translate.translationLanguage', 'translationLanguage')
                .where('phrase.id = :phraseId', { phraseId })
                .andWhere('translationLanguage.id = :translateLanguageId', { translateLanguageId })
                .andWhere('translate.id IS NOT NULL')
                .getCount()) <= 0

        if (!isUnique) {
            throw new Error(`Phrase "${strPhrase}" has other translation in ${translateLanguage.language}`)
        }

        return isUnique
    }

    async hasOtherTranslation(id: string, phrase: Phrase, translateLanguage: TranslateLanguage) {
        const { id: phraseId, phrase: strPhrase } = phrase
        const { id: translateLanguageId } = translateLanguage

        // check uniqueness of translation
        const isUnique =
            (await this.translateRepository
                .createQueryBuilder('translate')
                .innerJoin('translate.phrase', 'phrase')
                .innerJoin('translate.translationLanguage', 'translationLanguage')
                .where('phrase.id = :phraseId', { phraseId })
                .andWhere('translationLanguage.id = :translateLanguageId', { translateLanguageId })
                .andWhere('translate.id <> :id', { id })
                .getCount()) <= 0

        if (!isUnique) {
            throw new Error(`Phrase "${strPhrase}" has other translation in ${translateLanguage.language}`)
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
        await this.isUniqueTranslation(phrase, tranLanguage)

        return await this.translateRepository.save(
            await this.translateRepository.create({
                translation,
                phrase,
                translationLanguage: tranLanguage,
            }),
        )
    }

    async updateTranslation(data: UpdateTranslationInput): Promise<Translation | undefined> {
        console.log('updateTranslation -> data', data)
        const { id, translation = null, translationLanguageId = null, phraseId = null } = data
        if (!id) {
            throw new Error('Translation id is missing')
        }

        const currentTranslation = await this.translateRepository
            .createQueryBuilder('translate')
            .innerJoinAndSelect('translate.phrase', 'phrase')
            .innerJoinAndSelect('translate.translationLanguage', 'translationLanguage')
            .where('translate.id = :id', { id })
            .getOne()

        if (!currentTranslation) {
            throw new Error('Translation does not exist')
        }

        const {
            phrase: currentPhrase,
            translationLanguage: currentTranLang,
            translation: strTranslation,
        } = currentTranslation

        const phrase = phraseId ? await this.phraseRepository.findOne(phraseId) : currentPhrase
        if (!phrase) {
            throw new Error('New phrase does not exist')
        }

        const tranLanguage = translationLanguageId
            ? await this.translateLanguageRepository.findOne(translationLanguageId)
            : currentTranLang
        if (!tranLanguage) {
            throw new Error('New translation language does not exist')
        }

        const updatedTranslation = translation ? translation : strTranslation

        console.log('phrase', phrase, 'tranLanguage', tranLanguage, 'updatedTranslation', updatedTranslation)

        await this.hasOtherTranslation(id, phrase, tranLanguage)

        await this.translateRepository.update(id, {
            translation: updatedTranslation,
            phrase,
            translationLanguage: tranLanguage,
        })

        return await this.translateRepository.findOne(id, {
            relations: ['phrase', 'translationLanguage'],
        })
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
