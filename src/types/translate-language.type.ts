import { ArgsType, Field } from 'type-graphql'

@ArgsType()
export class GetTranslationLanguageArgs {
    @Field(() => Number, { nullable: true })
    id?: number

    @Field(() => String, { nullable: true })
    language?: string
}
