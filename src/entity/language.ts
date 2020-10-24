import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'
import { IsDate, IsString } from 'class-validator'

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
    @Field({ nullable: false })
    name: string

    @IsString()
    @Field()
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
}
