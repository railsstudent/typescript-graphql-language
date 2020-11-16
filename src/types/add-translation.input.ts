import { IsDefined, IsInt, IsNotEmpty, IsString } from 'class-validator'
import { Field, ID, InputType } from 'type-graphql'
import { Translation } from '../entity/translation'

@InputType({ description: 'Add Translation' })
export class AddTranslationInput implements Partial<Translation> {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    translation: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => ID)
    phraseId: string

    @IsDefined()
    @IsNotEmpty()
    @IsInt()
    @Field(() => Number)
    translationLanguageId: number
}
