import { Service } from 'typedi'
import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { Phrase, Translation, PaginatedPhrase } from '../entity'
import { PhraseService } from '../services'
import { AddPhraseInput, PhrasePaginationArgs, UpdatePhraseInput } from '../types'

@Service()
@Resolver(() => Phrase)
export class PhraseResolver {
    constructor(private service: PhraseService) {}

    @Query(() => PaginatedPhrase)
    paginatedPhrases(@Args() args: PhrasePaginationArgs): Promise<PaginatedPhrase> {
        return this.service.getPaginatedPhrases(args)
    }

    @Query(() => Phrase, { nullable: true })
    phraseById(@Arg('phraseId') phraseId: string): Promise<Phrase | undefined> {
        return this.service.getPhrase(phraseId)
    }

    @Mutation(() => Phrase)
    addPhrase(@Arg('data') input: AddPhraseInput): Promise<Phrase> {
        return this.service.addPhrase(input)
    }

    @Mutation(() => Phrase)
    updatePhrase(@Arg('data') input: UpdatePhraseInput): Promise<Phrase | undefined> {
        return this.service.updatePhrase(input)
    }

    @FieldResolver()
    lesson(@Root() phrase: Phrase) {
        return this.service.getLessonByPhrase(phrase.id)
    }

    @FieldResolver()
    async translations(@Root() phrase: Phrase): Promise<Translation[]> {
        try {
            return await this.service.getTranlations(phrase.id)
        } catch (e) {
            console.error(e)
            return []
        }
    }
}
