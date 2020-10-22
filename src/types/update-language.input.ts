import { Language } from '../entity'
import { InputType, Field, ID } from 'type-graphql'
import { IsDefined, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'

@InputType({ description: 'Update language' })
export class UpdateLanguageInput implements Partial<Language> {
    @IsOptional()
    @IsUUID()
    @Field(() => ID)
    id?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Field()
    name?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nativeName?: string
}
