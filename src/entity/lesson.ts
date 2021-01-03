import { Phrase } from './phrase'
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm'
import { Field, ID, ObjectType, Int } from 'type-graphql'
import { IsDate, IsString } from 'class-validator'
import { Language } from './language'

@Entity()
@Unique(['language.id', 'name'])
@ObjectType({ description: 'The lesson model' })
export class Lesson {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @IsString()
    @Column({ type: 'text', nullable: false })
    @Field({ nullable: false })
    name: string

    @ManyToOne(() => Language)
    @Field(() => Language)
    language: Language

    @OneToMany(() => Phrase, (phrase) => phrase.lesson)
    @Field(() => [Phrase]!)
    phrases: Phrase[]

    // @Field(() => Int!)
    // numOfPhrases: number

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @CreateDateColumn()
    createdDate: Date

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @UpdateDateColumn()
    updatedDate: Date
}
