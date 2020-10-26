import { Service } from 'typedi'
import { Resolver } from 'type-graphql'
import { Phrase } from '../entity'

@Service()
@Resolver(() => Phrase)
export class PhraseResolver {}
