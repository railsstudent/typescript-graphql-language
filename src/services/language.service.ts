import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Language } from '../entity'
import { AddLanguageInput, GetLanguageArgs, UpdateLanguageInput } from './../types'

@Service()
export class LanguageService {
    constructor(
        @InjectRepository(Language)
        private readonly langRepository: Repository<Language>,
    ) {}

    async getLanguage(dto: GetLanguageArgs): Promise<Language | undefined> {
        try {
            return dto ? await this.langRepository.findOne(dto) : undefined
        } catch (e) {
            console.log(e)
            return undefined
        }
    }

    async getLanguages(): Promise<Language[]> {
        return await this.langRepository.find({ order: { name: 'ASC' } })
    }

    async addLanguage(input: AddLanguageInput): Promise<Language> {
        if (!input) {
            throw new Error('Add language input is missing')
        }

        if (!input.name) {
            throw new Error('Name is missing')
        }

        if (!input.nativeName) {
            throw new Error('Native name is missing')
        }
        try {
            return this.langRepository.save(this.langRepository.create(input))
        } catch (e) {
            throw e
        }
    }

    async updateLanguage(input: UpdateLanguageInput): Promise<Language | undefined> {
        try {
            const { id, ...body } = input
            if (!id) {
                throw new Error('Language id is missing')
            }
            await this.langRepository.update(id, body)
            return this.langRepository.findOne(id)
        } catch (e) {
            throw e
        }
    }
}
