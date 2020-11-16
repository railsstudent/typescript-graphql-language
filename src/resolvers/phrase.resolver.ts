import { Service } from 'typedi'
import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { Phrase, PaginatedPhrase, PaginatedTranslation } from '../entity'
import { PhraseService, TranslateService } from '../services'
import { AddPhraseInput, PhrasePaginatedArgs, UpdatePhraseInput } from '../types'

@Service()
@Resolver(() => Phrase)
export class PhraseResolver {
    constructor(private service: PhraseService, private translateService: TranslateService) {}

    @Query(() => PaginatedPhrase)
    async paginatedPhrases(@Args() args: PhrasePaginatedArgs): Promise<PaginatedPhrase> {
        return await this.service.getPaginatedPhrases(args)
    }

    @Query(() => Phrase, { nullable: true })
    async phraseById(@Arg('id') phraseId: string): Promise<Phrase | undefined> {
        return await this.service.getPhrase(phraseId)
    }

    @Mutation(() => Phrase)
    async addPhrase(@Arg('data') input: AddPhraseInput): Promise<Phrase> {
        return await this.service.addPhrase(input)
    }

    @Mutation(() => Phrase)
    async updatePhrase(@Arg('data') input: UpdatePhraseInput): Promise<Phrase | undefined> {
        return await this.service.updatePhrase(input)
    }

    @FieldResolver()
    async lesson(@Root() phrase: Phrase) {
        return await this.service.getLessonByPhrase(phrase.id)
    }

    @FieldResolver()
    async paginatedTranslations(
        @Root() phrase: Phrase,
        @Arg('page', { nullable: true }) page: number = -1,
        @Arg('take', { nullable: true }) take: number = -1,
    ): Promise<PaginatedTranslation> {
        try {
            return await this.translateService.getPaginatedTranslations({
                phraseId: phrase.id,
                page,
                take,
            })
        } catch (e) {
            console.error(e)
            return {
                total: 0,
                translations: [],
            }
        }
    }
}
