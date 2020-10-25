import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { TranslateLanguage } from '../entity'
import { GetTranslationLanguageArgs, AddTranslationLanguageInput, UpdateTranslationLanguageInput } from '../types'

@Service()
export class TranslationLanguageService {
    constructor(
        @InjectRepository(TranslateLanguage)
        private readonly langRepository: Repository<TranslateLanguage>,
    ) {}

    async getLanguage(args: GetTranslationLanguageArgs): Promise<TranslateLanguage | undefined> {
        try {
            return args ? await this.langRepository.findOne(args) : undefined
        } catch (e) {
            console.log(e)
            return undefined
        }
    }

    async getLanguages(): Promise<TranslateLanguage[]> {
        return await this.langRepository.find({ order: { language: 'ASC' } })
    }

    async addLanguage(input: AddTranslationLanguageInput): Promise<TranslateLanguage> {
        if (!input) {
            throw new Error('Add language input is missing')
        }

        if (!input.language) {
            throw new Error('Language is missing')
        }

        return this.langRepository.save(this.langRepository.create(input))
    }

    async updateLanguage(input: UpdateTranslationLanguageInput): Promise<TranslateLanguage | undefined> {
        const { id, ...body } = input
        if (!id) {
            throw new Error('Language id is missing')
        }
        await this.langRepository.update(id, body)
        return this.langRepository.findOne(id)
    }
}
