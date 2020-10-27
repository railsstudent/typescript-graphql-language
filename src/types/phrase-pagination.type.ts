import { ArgsType, Field, Int } from 'type-graphql'

@ArgsType()
export class PhrasePaginationArgs {
    @Field(() => Int)
    page: number

    @Field(() => Int)
    take: number
}
