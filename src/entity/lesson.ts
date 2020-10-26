import { Phrase } from './phrase'
import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'
import { IsDate, IsString } from 'class-validator'
import { Language } from './language'

@Entity()
@ObjectType({ description: 'The lesson model' })
export class Lesson {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @IsString()
    @Column({ type: 'text', nullable: false })
    @Index({ unique: true })
    @Field({ nullable: false })
    name: string

    @ManyToOne(() => Language)
    @Field(() => Language)
    language: Language

    @OneToMany(() => Phrase, (phrase) => phrase.lesson)
    @Field(() => [Phrase]!)
    phrases: Phrase[]

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @CreateDateColumn()
    createdDate: Date

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @UpdateDateColumn()
    updatedDate: Date
}
