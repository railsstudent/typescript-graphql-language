import { Field, InputType } from 'type-graphql'
import { IsDefined, IsNotEmpty, IsString } from 'class-validator'
import { Lesson } from './../entity'

@InputType({ description: 'Add lesson' })
export class AddLessonInput {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    name: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    languageName: string
}
