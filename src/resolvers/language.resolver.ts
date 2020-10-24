import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { Service } from 'typedi'
import { AddLanguageInput, GetLanguageArgs } from './../types'
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
        if (!input) {
            throw new Error('Add language input is missing')
        }

        if (!input.name) {
            throw new Error('Name is missing')
        }

        if (!input.nativeName) {
            throw new Error('Native name is missing')
        }
        return this.service.addLanguage(input)
    }

    @FieldResolver()
    title(@Root() language: Language) {
        const { name = '', nativeName = '' } = language || {}
        return `${name} (${nativeName})`
    }
}
