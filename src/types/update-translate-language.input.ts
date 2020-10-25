import { IsDefined, IsNotEmpty, IsString, IsNumberString } from 'class-validator'
import { Field, ID, InputType } from 'type-graphql'
import { TranslateLanguage } from '../entity'

@InputType()
export class UpdateTranslateLanguageInput implements Partial<TranslateLanguage> {
    @IsDefined()
    @IsNotEmpty()
    @IsNumberString()
    @Field(() => ID)
    id: number

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field()
    language: string
}
