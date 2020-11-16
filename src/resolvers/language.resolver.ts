import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { Service } from 'typedi'
import { AddLanguageInput, GetLanguageArgs, UpdateLanguageInput } from './../types'
import { LanguageService, LessonService } from './../services/'
import { Language, Lesson } from './../entity'

@Service()
@Resolver(() => Language)
export class LanguageResolver {
    constructor(private service: LanguageService, private lessonService: LessonService) {}

    @Query(() => [Language]!)
    async languages(): Promise<Language[]> {
        return await this.service.getLanguages()
    }

    @Query(() => Language, { nullable: true })
    async language(@Args() args: GetLanguageArgs): Promise<Language | undefined> {
        return await this.service.getLanguage(args)
    }

    @Mutation(() => Language!)
    async addLanguage(@Arg('data') input: AddLanguageInput): Promise<Language> {
        return await this.service.addLanguage(input)
    }

    @Mutation(() => Language!)
    async updateLanguage(@Arg('data') input: UpdateLanguageInput): Promise<Language | undefined> {
        return await this.service.updateLanguage(input)
    }

    @FieldResolver()
    title(@Root() language: Language) {
        const { name = '', nativeName = '' } = language || {}
        return `${name} (${nativeName})`
    }

    @FieldResolver()
    async lessons(@Root() language: Language): Promise<Lesson[]> {
        return await this.lessonService.getLessons({ id: language.id })
    }
}
