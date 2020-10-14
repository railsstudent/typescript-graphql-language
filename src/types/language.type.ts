import { ArgsType, Field, ID } from 'type-graphql'

@ArgsType()
export class GetLanguageArgs {
    @Field(() => ID, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    nativeName?: string
}
