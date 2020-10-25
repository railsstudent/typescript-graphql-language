import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
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

    @OneToOne(() => TranslateLanguage)
    @JoinColumn()
    translationLanguage: TranslateLanguage

    @ManyToOne(() => Phrase)
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
