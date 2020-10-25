import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql'
import { Service } from 'typedi'
import { TranslateLanguage } from '../entity'
import { TranslationLanguageService } from '../services'
import { GetTranslationLanguageArgs, AddTranslateLanguageInput, UpdateTranslateLanguageInput } from '../types'

@Service()
@Resolver(() => TranslateLanguage)
export class TranslationLanguageResolver {
    constructor(private service: TranslationLanguageService) {}

    @Query(() => [TranslateLanguage]!)
    translateLanguages(): Promise<TranslateLanguage[]> {
        return this.service.getLanguages()
    }

    @Query(() => TranslateLanguage, { nullable: true })
    translateLanguage(@Args() args: GetTranslationLanguageArgs): Promise<TranslateLanguage | undefined> {
        return this.service.getLanguage(args)
    }

    @Mutation(() => TranslateLanguage!)
    addTranslateLanguage(@Arg('data') input: AddTranslateLanguageInput): Promise<TranslateLanguage> {
        return this.service.addLanguage(input)
    }

    @Mutation(() => TranslateLanguage, { nullable: false })
    updateTranslateLanguage(@Arg('data') input: UpdateTranslateLanguageInput): Promise<TranslateLanguage | undefined> {
        return this.service.updateLanguage(input)
    }
}
