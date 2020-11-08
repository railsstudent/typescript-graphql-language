import { TranslateService } from './../services/translate.service'
import { Arg, Query, Resolver, Args, Mutation } from 'type-graphql'
import { Service } from 'typedi'
import { PaginatedTranslation, Translation } from './../entity'
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
    addTranslation(@Arg('data') input: AddTranslationInput): Promise<Translation | undefined> {
        return Promise.resolve(undefined)
    }

    @Mutation(() => Translation)
    updateTranslation(@Arg('data') input: UpdateTranslationInput): Promise<Translation | undefined> {
        return Promise.resolve(undefined)
    }
}
