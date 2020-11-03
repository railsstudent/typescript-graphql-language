import { Arg, Query, Resolver, Args, Mutation } from 'type-graphql'
import { Service } from 'typedi'
import { Translation } from './../entity'
import { TranslatePaginatedArgs } from './../types'

@Service()
@Resolver(() => Translation)
export class TranslateResolver {
    @Query(() => [Translation]!)
    paginatedTranslations(@Args() id: TranslatePaginatedArgs) {
        return []
    }

    @Query(() => Translation)
    translation(@Arg('id') id: string) {
        return null
    }

    @Mutation(() => Translation)
    addTranslation() {
        return null
    }

    @Mutation(() => Translation)
    updateTranslation() {
        return null
    }
}
