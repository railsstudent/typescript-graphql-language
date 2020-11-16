import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Lesson, PaginatedPhrase, Phrase } from '../entity'
import { AddPhraseInput, PhrasePaginatedArgs, UpdatePhraseInput } from '../types'

@Service()
export class PhraseService {
    constructor(
        @InjectRepository(Phrase)
        private readonly phraseRepository: Repository<Phrase>,
        @InjectRepository(Lesson)
        private readonly lessonRepository: Repository<Lesson>,
    ) {}

    async getPaginatedPhrases(args: PhrasePaginatedArgs): Promise<PaginatedPhrase> {
        try {
            const { page, take, lessonId } = args
            let query = await this.phraseRepository
                .createQueryBuilder('phrase')
                .innerJoin('phrase.lesson', 'lesson')
                .where('lesson.id = :lessonId', { lessonId })

            if (page >= 0 && take >= 0) {
                query = query.skip(page * take).take(take)
            }

            const [phrases, total] = await query.getManyAndCount()

            return {
                phrases,
                total,
            }
        } catch (e) {
            console.log(e)
            return { phrases: [], total: 0 }
        }
    }

    async getPhrase(phraseId: string): Promise<Phrase | undefined> {
        try {
            return phraseId ? await this.phraseRepository.findOne(phraseId) : undefined
        } catch (e) {
            console.log(e)
            return undefined
        }
    }

    async getLessonByPhrase(phraseId: string): Promise<Lesson | undefined> {
        if (phraseId) {
            const lesson = await this.lessonRepository
                .createQueryBuilder('lesson')
                .innerJoin('lesson.phrases', 'phrases')
                .where('phrases.id = :phraseId', { phraseId })
                .getOne()

            return lesson
        }
        return undefined
    }

    async isUniquePhrase(lesson: Lesson, phrase: string) {
        const { id: lessonId, name } = lesson

        // check uniqueness of phrase
        const isUnique =
            (await this.phraseRepository
                .createQueryBuilder('phrase')
                .innerJoin('phrase.lesson', 'lesson')
                .where('lesson.id = :lessonId', { lessonId })
                .andWhere('phrase.phrase = :phrase', { phrase })
                .getCount()) <= 0

        if (!isUnique) {
            throw new Error(`${phrase} already exists in ${name} lesson`)
        }

        return isUnique
    }

    async addPhrase(data: AddPhraseInput): Promise<Phrase> {
        const { lessonId, phrase } = data
        if (!lessonId) {
            throw new Error('Lesson id is missing')
        }

        if (!phrase) {
            throw new Error('Phrase is missing')
        }

        const lesson = await this.lessonRepository.findOneOrFail(lessonId)

        // check uniqueness of phrase
        await this.isUniquePhrase(lesson, phrase)

        return this.phraseRepository.save(
            this.phraseRepository.create({
                phrase,
                lesson,
            }),
        )
    }

    async updatePhrase(data: UpdatePhraseInput): Promise<Phrase | undefined> {
        const { id, phrase } = data
        if (!id) {
            throw new Error('Phrase id is missing')
        }

        if (!phrase) {
            throw new Error('Phrase is missing')
        }

        const lesson = await this.lessonRepository
            .createQueryBuilder('lesson')
            .innerJoin('lesson.phrases', 'phrases')
            .where('phrases.id = :id', { id })
            .getOne()

        if (!lesson) {
            throw new Error('Lesson does not exist')
        }

        // check uniqueness of phrase
        await this.isUniquePhrase(lesson, phrase)
        await this.phraseRepository.update(id, { phrase })

        return this.phraseRepository.findOne(id)
    }
}
