import { TranslateService } from './../services/translate.service'
import { Arg, Query, Resolver, Args, Mutation, FieldResolver, Root } from 'type-graphql'
import { Service } from 'typedi'
import { PaginatedTranslation, Phrase, TranslateLanguage, Translation } from './../entity'
import { TranslationPaginatedArgs, AddTranslationInput, UpdateTranslationInput } from './../types'

@Service()
@Resolver(() => Translation)
export class TranslateResolver {
    constructor(private service: TranslateService) {}

    @Query(() => PaginatedTranslation)
    async paginatedTranslations(@Args() args: TranslationPaginatedArgs): Promise<PaginatedTranslation> {
        return await this.service.getPaginatedTranslations(args)
    }

    @Mutation(() => Translation)
    async addTranslation(@Arg('data') input: AddTranslationInput): Promise<Translation> {
        return await this.service.addTranslation(input)
    }

    @Mutation(() => Translation)
    async updateTranslation(@Arg('data') input: UpdateTranslationInput): Promise<Translation | undefined> {
        return await this.service.updateTranslation(input)
    }

    @FieldResolver()
    async phrase(@Root() translation: Translation): Promise<Phrase | undefined> {
        return await this.service.getPhrase(translation)
    }

    @FieldResolver()
    async translationLanguage(@Root() translation: Translation): Promise<TranslateLanguage | undefined> {
        return await this.service.getTranslationLanguage(translation)
    }
}
