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
    async translateLanguages(): Promise<TranslateLanguage[]> {
        return await this.service.getLanguages()
    }

    @Query(() => TranslateLanguage, { nullable: true })
    async translateLanguage(@Args() args: GetTranslationLanguageArgs): Promise<TranslateLanguage | undefined> {
        return await this.service.getLanguage(args)
    }

    @Mutation(() => TranslateLanguage!)
    async addTranslateLanguage(@Arg('data') input: AddTranslateLanguageInput): Promise<TranslateLanguage> {
        return await this.service.addLanguage(input)
    }

    @Mutation(() => TranslateLanguage, { nullable: false })
    async updateTranslateLanguage(
        @Arg('data') input: UpdateTranslateLanguageInput,
    ): Promise<TranslateLanguage | undefined> {
        return await this.service.updateLanguage(input)
    }
}
