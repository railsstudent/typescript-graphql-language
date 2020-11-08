import { IsDefined, IsNotEmpty, IsString } from 'class-validator'
import { Field, InputType } from 'type-graphql'
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
    @Field(() => String)
    phraseId: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    translationLanguageId: string
}
