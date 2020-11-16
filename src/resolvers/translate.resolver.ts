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
    paginatedTranslations(@Args() args: TranslationPaginatedArgs): Promise<PaginatedTranslation> {
        return this.service.getPaginatedTranslations(args)
    }

    @Mutation(() => Translation)
    addTranslation(@Arg('data') _input: AddTranslationInput): Promise<Translation | undefined> {
        return Promise.resolve(undefined)
    }

    @Mutation(() => Translation)
    updateTranslation(@Arg('data') _input: UpdateTranslationInput): Promise<Translation | undefined> {
        return Promise.resolve(undefined)
    }

    @FieldResolver()
    phrase(@Root() translation: Translation): Promise<Phrase | undefined> {
        return this.service.getPhrase(translation)
    }

    @FieldResolver()
    translationLanguage(@Root() translation: Translation): Promise<TranslateLanguage | undefined> {
        return this.service.getTranslationLanguage(translation)
    }
}
