import { LanguageService } from './../services/'
import { Language } from './../entity'
import { Args, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import { Service } from 'typedi'
import { GetLanguageArgs } from '../types'

@Service()
@Resolver(() => Language)
export class LanguageResolver {
    constructor(private service: LanguageService) {}

    @Query(() => [Language]!)
    async languages(): Promise<Language[]> {
        return await this.service.getLanguages()
    }

    @Query(() => Language, { nullable: true })
    async language(@Args() { id, name, nativeName }: GetLanguageArgs): Promise<Language | null> {
        return await this.service.getLanguage({ id, name, nativeName })
    }

    @FieldResolver()
    title(@Root() language: Language) {
        const { name, nativeName } = language
        return `${name} (${nativeName})`
    }
}
