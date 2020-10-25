import { Column, CreateDateColumn, Entity, Index, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'
import { IsDate, IsInt, IsString } from 'class-validator'

@Entity()
@ObjectType({ description: 'The translate language model' })
export class TranslateLanguage {
    @PrimaryColumn('int')
    @IsInt()
    @Field(() => ID)
    id: number

    @IsString()
    @Column({ type: 'text', nullable: false })
    @Index({ unique: true })
    @Field({ nullable: false })
    language: string

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @CreateDateColumn()
    createdDate: Date

    @IsDate()
    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    @UpdateDateColumn()
    updatedDate: Date
}
