import { IsDefined, IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator'
import { Field, ID, InputType } from 'type-graphql'
import { Translation } from '../entity/translation'

@InputType({ description: 'Update Translation' })
export class UpdateTranslationInput implements Partial<Translation> {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => ID)
    id: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Field(() => String, { nullable: true })
    translation?: string

    @IsOptional()
    @IsNotEmpty()
    @IsInt()
    @Field(() => Number, { nullable: true })
    translationLanguageId?: number

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Field(() => ID, { nullable: true })
    phraseId?: string
}
