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

    async getLanguage(args: GetLanguageArgs): Promise<Language | undefined> {
        try {
            return args ? await this.langRepository.findOne(args) : undefined
        } catch (e) {
            console.log(e)
            return undefined
        }
    }

    async getLanguages(): Promise<Language[]> {
        return await this.langRepository.find({ order: { name: 'ASC' } })
    }

    async addLanguage(input: AddLanguageInput): Promise<Language> {
        return this.langRepository.save(this.langRepository.create(input))
    }

    async updateLanguage(input: UpdateLanguageInput): Promise<Language | undefined> {
        const { id, ...body } = input
        await this.langRepository.update(id, body)
        return this.langRepository.findOne(id)
    }
}
