import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType({ description: 'The language model' })
export class Language {
    @Field(() => ID)
    id: string

    @Field({ nullable: false })
    nativeName: string

    @Field({ nullable: false })
    name: string

    @Field()
    title?: string
}
