import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql'
import { Service } from 'typedi'
import { TranslateLanguage } from '../entity'
import { TranslationLanguageService } from '../services'
import { GetTranslationLanguageArgs, AddTranslationLanguageInput, UpdateTranslationLanguageInput } from '../types'

@Service()
@Resolver(() => TranslateLanguage)
export class TranslationLanguageResolver {
    constructor(private service: TranslationLanguageService) {}

    @Query(() => [TranslateLanguage]!)
    translationLanguages(): Promise<TranslateLanguage[]> {
        return this.service.getLanguages()
    }

    @Query(() => TranslateLanguage, { nullable: true })
    translationLanguage(@Args() args: GetTranslationLanguageArgs): Promise<TranslateLanguage | undefined> {
        return this.service.getLanguage(args)
    }

    @Mutation(() => TranslateLanguage!)
    addTranslationLanguage(@Arg('data') input: AddTranslationLanguageInput): Promise<TranslateLanguage> {
        return this.service.addLanguage(input)
    }

    @Mutation(() => TranslateLanguage, { nullable: false })
    updateTranslationLanguage(
        @Arg('data') input: UpdateTranslationLanguageInput,
    ): Promise<TranslateLanguage | undefined> {
        return this.service.updateLanguage(input)
    }
}
