import { ArgsType, Field, ID, Int } from 'type-graphql'

@ArgsType()
export class TranslationPaginatedArgs {
    @Field(() => ID)
    phraseId: string

    @Field(() => Int, { nullable: true })
    page: number

    @Field(() => Int, { nullable: true })
    take: number
}
