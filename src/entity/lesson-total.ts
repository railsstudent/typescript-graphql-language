import { Field, ObjectType } from 'type-graphql'
import { Lesson } from '../entity'

@ObjectType({ description: 'All lessons and the total' })
export class LessonTotal {
    @Field(() => [Lesson]!, { nullable: true })
    lessons: Lesson[]

    @Field({ nullable: true })
    total: number
}
