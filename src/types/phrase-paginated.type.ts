import { ArgsType, Field, ID, Int } from 'type-graphql'

@ArgsType()
export class PhrasePaginatedArgs {
    @Field(() => ID)
    lessonId: string

    @Field(() => Int, { nullable: true })
    page: number

    @Field(() => Int, { nullable: true })
    take: number
}
