import { Arg, Query, Resolver, Args } from 'type-graphql'
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
}
