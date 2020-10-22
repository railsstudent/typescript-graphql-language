import { Language } from './../entity'
import { Field, InputType } from 'type-graphql'
import { IsDefined, IsNotEmpty, IsString } from 'class-validator'

@InputType({ description: 'Add language' })
export class AddLanguageInput implements Partial<Language> {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @Field()
    name: string

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @Field()
    nativeName: string
}
