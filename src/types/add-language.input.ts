import { Field, InputType } from 'type-graphql'
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { Language } from './../entity'

@InputType({ description: 'Add language' })
export class AddLanguageInput implements Partial<Language> {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field()
    name: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Field()
    nativeName: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Field({ nullable: true })
    flag?: string
}
