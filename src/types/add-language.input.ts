import { Field, InputType } from 'type-graphql'
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { Language } from './../entity'

@InputType({ description: 'Add language' })
export class AddLanguageInput implements Partial<Language> {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    name: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    nativeName: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Field(() => String, { nullable: true })
    flag?: string
}
