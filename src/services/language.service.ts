import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { Language } from '../entity'

const languages = [{
    id: '1',
    nativeName: 'Español',
    name: 'Spanish',
    createdDate: new Date(),
    updatedDate: new Date()
},
{
    id: '2',
    nativeName: 'Português',
    name: 'Portuguese',
    createdDate: new Date(),
    updatedDate: new Date()
}]

type languageType = {
    id?: string
    name?: string
    nativeName?: string
}

@Service()
export class LanguageService {

    constructor(private langRepository: Repository<Language>) {}
    
    async getLanguage(dto: languageType): Promise<Language | null> {
        const r1 = dto.id ? languages.filter (item => item.id === dto.id) : []
        const r2 = dto.name ? languages.filter (item => item.name === dto.name) : []
        const r3 = dto.nativeName ? languages.filter (item => item.nativeName === dto.nativeName) : []

        const all = [...r1, ...r2, ...r3] 
        return all.length > 0 ? all[0] : null
    }

    async getLanguages(): Promise<Language[]> {
        return this.langRepository.find({ order: { name: 'ASC' }})
    }
}
