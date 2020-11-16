import { Field, ID, InputType } from 'type-graphql'
import { IsDefined, IsNotEmpty, IsString } from 'class-validator'
import { Phrase } from '../entity'

@InputType({ description: 'Add phrase' })
export class AddPhraseInput implements Partial<Phrase> {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    phrase: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => ID)
    lessonId: string
}
