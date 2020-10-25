import { ArgsType, Field, ID } from 'type-graphql'

@ArgsType()
export class GetTranslationLanguageArgs {
    @Field(() => ID, { nullable: true })
    id?: number

    @Field(() => String, { nullable: true })
    language?: string
}
