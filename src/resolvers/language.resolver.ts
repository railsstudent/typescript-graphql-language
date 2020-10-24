import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { Service } from 'typedi'
import { AddLanguageInput, GetLanguageArgs, UpdateLanguageInput } from './../types'
import { LanguageService } from './../services/'
import { Language } from './../entity'

@Service()
@Resolver(() => Language)
export class LanguageResolver {
    constructor(private service: LanguageService) {}

    @Query(() => [Language]!)
    languages(): Promise<Language[]> {
        return this.service.getLanguages()
    }

    @Query(() => Language, { nullable: true })
    language(@Args() args: GetLanguageArgs): Promise<Language | undefined> {
        return this.service.getLanguage(args)
    }

    @Mutation(() => Language!)
    addLanguage(@Arg('data') input: AddLanguageInput): Promise<Language> {
        return this.service.addLanguage(input)
    }

    @Mutation(() => Language!)
    updateLanguage(@Arg('data') input: UpdateLanguageInput): Promise<Language | undefined> {
        return this.service.updateLanguage(input)
    }

    @FieldResolver()
    title(@Root() language: Language) {
        const { name = '', nativeName = '' } = language || {}
        return `${name} (${nativeName})`
    }
}
