import { IsDefined, IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator'
import { Field, ID, InputType } from 'type-graphql'
import { TranslateLanguage } from '../entity'

@InputType()
export class UpdateTranslationLanguageInput implements Partial<TranslateLanguage> {
    @IsDefined()
    @IsNotEmpty()
    @IsInt()
    @Field(() => ID)
    id: number

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Field({ nullable: true })
    language: string
}
