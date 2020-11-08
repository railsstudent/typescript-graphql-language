import { Field, Int, ObjectType } from 'type-graphql'
import { Translation } from './translation'

@ObjectType({ description: 'paginated translation object' })
export class PaginatedTranslation {
    @Field(() => Int)
    total: number

    @Field(() => [Translation]!)
    translations: Translation[]
}
