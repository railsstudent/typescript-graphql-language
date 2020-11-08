import { IsDefined, IsNotEmpty, IsString, IsOptional } from 'class-validator'
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
    @IsString()
    @Field(() => String, { nullable: true })
    translationLanguageId?: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Field(() => String, { nullable: true })
    phraseId?: string
}
