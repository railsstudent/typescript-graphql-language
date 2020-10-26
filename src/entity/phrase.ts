import { Translation } from './translation'
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
import { Lesson } from './lesson'

@Entity()
@ObjectType({ description: 'The phrase model' })
export class Phrase {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @IsString()
    @Index({ unique: true })
    @Column({ type: 'text', nullable: false })
    @Field({ nullable: false })
    phrase: string

    @ManyToOne(() => Lesson)
    lesson: Lesson

    @OneToMany(() => Translation, (ret) => ret.phrase)
    translations: Translation[]

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @CreateDateColumn()
    createdDate: Date

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @UpdateDateColumn()
    updatedDate: Date
}
