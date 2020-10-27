import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { Service } from 'typedi'
import { LessonService } from '../services'
import { Language, Lesson, Phrase } from './../entity'
import { GetLanguageArgs, AddLessonInput, UpdateLessonInput } from './../types'

@Service()
@Resolver(() => Lesson)
export class LessonResolver {
    constructor(private service: LessonService) {}

    @Query(() => [Lesson]!)
    lessons(@Args() args: GetLanguageArgs): Promise<Lesson[]> {
        return this.service.getLessons(args)
    }

    @Query(() => Lesson, { nullable: true })
    lesson(@Arg('id') id: string): Promise<Lesson | undefined> {
        return this.service.getLesson(id)
    }

    @Mutation(() => Lesson, { nullable: false })
    addLesson(@Arg('data') input: AddLessonInput): Promise<Lesson> {
        return this.service.addLesson(input)
    }

    @Mutation(() => Lesson, { nullable: false })
    updateLesson(@Arg('data') input: UpdateLessonInput): Promise<Lesson | undefined> {
        return this.service.updateLesson(input)
    }

    @FieldResolver()
    async phrases(@Root() lesson: Lesson): Promise<Phrase[]> {
        return this.service.findPhrasesByLesson(lesson.id)
    }

    @FieldResolver()
    async language(@Root() lesson: Lesson): Promise<Language | undefined> {
        return this.service.findLanguageByLesson(lesson.id)
    }
}