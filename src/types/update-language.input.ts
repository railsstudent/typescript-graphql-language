import { Language } from '../entity'
import { InputType, Field, ID } from 'type-graphql'
import { IsDefined, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'

@InputType({ description: 'Update language' })
export class UpdateLanguageInput implements Partial<Language> {
    @IsDefined()
    @IsNotEmpty()
    @IsUUID()
    @Field(() => ID)
    id: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Field(() => String, { nullable: true })
    name?: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Field(() => String, { nullable: true })
    nativeName?: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Field(() => String, { nullable: true })
    flag?: string
}
