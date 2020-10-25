import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
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
    @Field({ nullable: false })
    name: string

    @ManyToOne(() => Language)
    language: Language

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @CreateDateColumn()
    createdDate: Date

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @UpdateDateColumn()
    updatedDate: Date
}
