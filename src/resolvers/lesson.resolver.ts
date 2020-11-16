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
    async lessons(@Args() args: GetLanguageArgs): Promise<Lesson[]> {
        return await this.service.getLessons(args)
    }

    @Query(() => Lesson, { nullable: true })
    async lesson(@Arg('id') id: string): Promise<Lesson | undefined> {
        return await this.service.getLesson(id)
    }

    @Mutation(() => Lesson, { nullable: false })
    async addLesson(@Arg('data') input: AddLessonInput): Promise<Lesson> {
        return await this.service.addLesson(input)
    }

    @Mutation(() => Lesson, { nullable: false })
    async updateLesson(@Arg('data') input: UpdateLessonInput): Promise<Lesson | undefined> {
        return this.service.updateLesson(input)
    }

    @FieldResolver()
    async phrases(@Root() lesson: Lesson): Promise<Phrase[]> {
        return await this.service.findPhrasesByLesson(lesson.id)
    }

    @FieldResolver()
    async numOfPhrases(@Root() lesson: Lesson): Promise<number> {
        return await this.service.getNumOfPhrases(lesson.id)
    }

    @FieldResolver()
    async language(@Root() lesson: Lesson): Promise<Language | undefined> {
        return await this.service.findLanguageByLesson(lesson.id)
    }
}
