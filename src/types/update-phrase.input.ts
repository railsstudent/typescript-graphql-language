import { Field, ID, InputType } from 'type-graphql'
import { IsDefined, IsNotEmpty, IsString } from 'class-validator'
import { Phrase } from './../entity'

@InputType({ description: 'Update phrase' })
export class UpdatePhraseInput implements Partial<Phrase> {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => ID)
    id: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    phrase: string
}
