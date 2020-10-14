import { Service } from 'typedi'
import { Language } from '../entities'

const languages = [{
    id: '1',
    nativeName: 'Español',
    name: 'Spanish',
},
{
    id: '2',
    nativeName: 'Português',
    name: 'Portuguese',
}]

@Service()
export class LanguageService {
    
    async getLanguage(dto: { id?: string; name?: string; nativeName?: string }): Promise<Language | null> {
        const r1 = dto.id ? languages.filter (item => item.id === dto.id) : []
        const r2 = dto.name ? languages.filter (item => item.name === dto.name) : []
        const r3 = dto.nativeName ? languages.filter (item => item.nativeName === dto.nativeName) : []

        const all = [...r1, ...r2, ...r3] 
        return all.length > 0 ? all[0] : null
    }

    async getLanguages(): Promise<Language[]> {
        return await Promise.resolve(languages)
    }
}
