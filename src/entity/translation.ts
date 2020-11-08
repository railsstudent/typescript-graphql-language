import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'
import { IsDate, IsString } from 'class-validator'
import { Phrase } from './phrase'
import { TranslateLanguage } from './translate-language'

@Entity()
@ObjectType({ description: 'The translation model' })
export class Translation {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @IsString()
    @Column({ type: 'text', nullable: false })
    @Field({ nullable: false })
    translation: string

    @ManyToOne(() => TranslateLanguage)
    @Field(() => TranslateLanguage)
    translationLanguage: TranslateLanguage

    @ManyToOne(() => Phrase)
    @Field(() => Phrase!)
    phrase: Phrase

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @CreateDateColumn()
    createdDate: Date

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @UpdateDateColumn()
    updatedDate: Date
}
