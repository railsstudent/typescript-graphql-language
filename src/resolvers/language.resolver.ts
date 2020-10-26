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
    languages(): Promise<Language[]> {
        return this.service.getLanguages()
    }

    @Query(() => Language, { nullable: true })
    language(@Args() args: GetLanguageArgs): Promise<Language | undefined> {
        return this.service.getLanguage(args)
    }

    @Mutation(() => Language!)
    addLanguage(@Arg('data') input: AddLanguageInput): Promise<Language> {
        return this.service.addLanguage(input)
    }

    @Mutation(() => Language!)
    updateLanguage(@Arg('data') input: UpdateLanguageInput): Promise<Language | undefined> {
        return this.service.updateLanguage(input)
    }

    @FieldResolver()
    title(@Root() language: Language) {
        const { name = '', nativeName = '' } = language || {}
        return `${name} (${nativeName})`
    }

    @FieldResolver()
    lessons(@Root() language: Language): Promise<Lesson[]> {
        return this.lessonService.getLessons({ id: language.id })
    }
}
