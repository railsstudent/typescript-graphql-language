import { Field, ID, InputType } from 'type-graphql'
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { Lesson } from './../entity'

@InputType({ description: 'Update lesson' })
export class UpdateLessonInput implements Partial<Lesson> {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => ID)
    id: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    name: string
}
