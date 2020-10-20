import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Language } from '../entity'

type languageType = {
    id?: string
    name?: string
    nativeName?: string
}

@Service()
export class LanguageService {
    constructor(
        @InjectRepository(Language)
        private readonly langRepository: Repository<Language>
    ) {}
    
    async getLanguage(dto: languageType): Promise<Language | undefined> {
        try {
            return dto ? await this.langRepository.findOne(dto) : undefined
        } catch (e) {
            console.log(e)
            return undefined
        }
    }

    async getLanguages(): Promise<Language[]> {
        return await this.langRepository.find({ order: { name: 'ASC' }})
    }
}
