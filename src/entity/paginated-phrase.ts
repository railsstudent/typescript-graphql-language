import { Field, Int, ObjectType } from 'type-graphql'
import { Phrase } from './phrase'

@ObjectType({ description: 'paginated phrase object' })
export class PaginatedPhrase {
    @Field(() => Int)
    total: number

    @Field(() => [Phrase]!)
    phrases: Phrase[]
}
