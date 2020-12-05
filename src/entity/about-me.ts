import { Field, ObjectType } from 'type-graphql'

@ObjectType({ description: 'About me model' })
export class AboutMe {
    @Field({ nullable: false })
    name: string

    @Field(() => String)
    github: string

    @Field(() => String)
    bio: string
}
