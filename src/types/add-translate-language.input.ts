import { IsDefined, IsNotEmpty, IsString } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { TranslateLanguage } from '../entity'

@InputType({ description: 'Add translation language input' })
export class AddTranslateLanguageInput implements Partial<TranslateLanguage> {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    language: string
}
