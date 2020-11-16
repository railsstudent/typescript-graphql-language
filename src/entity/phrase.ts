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
import { Field, ID, ObjectType } from 'type-graphql'
import { IsDate, IsString } from 'class-validator'
import { Lesson } from './lesson'
import { Translation } from './translation'
import { PaginatedTranslation } from './paginated-translation'

@Entity()
@Unique(['lesson.id', 'phrase'])
@ObjectType({ description: 'The phrase model' })
export class Phrase {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @IsString()
    @Column({ type: 'text', nullable: false })
    @Field({ nullable: false })
    phrase: string

    @ManyToOne(() => Lesson)
    @Field(() => Lesson!)
    lesson: Lesson

    @OneToMany(() => Translation, (ret) => ret.phrase)
    translations: Translation[]

    @Field(() => PaginatedTranslation!)
    paginatedTranslations: PaginatedTranslation

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @CreateDateColumn()
    createdDate: Date

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @UpdateDateColumn()
    updatedDate: Date
}
