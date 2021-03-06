import { Column, CreateDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'
import { IsDate, IsString } from 'class-validator'
import { Lesson } from './lesson'

@Entity()
@ObjectType({ description: 'The language model' })
export class Language {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string

    @IsString()
    @Column({ type: 'text', nullable: false })
    @Field({ nullable: false })
    nativeName: string

    @IsString()
    @Column({ type: 'text', nullable: false })
    @Index({ unique: true })
    @Field({ nullable: false })
    name: string

    @IsString()
    @Field(() => String)
    title?: string

    @IsString()
    @Column({ type: 'text', nullable: false, default: () => "''" })
    @Field()
    flag: string

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @CreateDateColumn()
    createdDate: Date

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @UpdateDateColumn()
    updatedDate: Date

    @OneToMany(() => Lesson, (lesson) => lesson.language)
    @Field(() => [Lesson]!)
    lessons: Lesson[]
}
