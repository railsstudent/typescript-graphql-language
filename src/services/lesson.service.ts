import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Language, Lesson, Phrase, LessonTotal } from '../entity'
import { GetLanguageArgs, AddLessonInput, UpdateLessonInput } from './../types'

@Service()
export class LessonService {
    constructor(
        @InjectRepository(Lesson)
        private readonly lessonRepository: Repository<Lesson>,
        @InjectRepository(Phrase)
        private readonly phraseRepository: Repository<Phrase>,
        @InjectRepository(Language)
        private readonly languageRepository: Repository<Language>,
    ) {}

    async getLessons(args: GetLanguageArgs): Promise<LessonTotal> {
        let query = this.lessonRepository.createQueryBuilder('lesson').innerJoinAndSelect('lesson.language', 'language')

        if (args) {
            const { id = '', name = '', nativeName = '' } = args

            let hasWhere = false
            if (id) {
                query = query.where('language.id = :id', { id })
                hasWhere = true
            }

            if (name) {
                query = hasWhere
                    ? query.andWhere('language.name = :name', { name })
                    : query.where('language.name = :name', { name })
                hasWhere = true
            }

            if (nativeName) {
                query = hasWhere
                    ? query.andWhere('language.nativeName = :nativeName', { nativeName })
                    : query.where('language.nativeName = :nativeName', { nativeName })
            }
        }

        const [lessons, total] = await query
            .orderBy('language.name', 'ASC')
            .addOrderBy('lesson.name', 'ASC')
            .getManyAndCount()
        return {
            total,
            lessons,
        }
    }

    async getLesson(id: string): Promise<Lesson | undefined> {
        try {
            if (id) {
                return this.lessonRepository.createQueryBuilder('lesson').where('lesson.id = :id', { id }).getOne()
            }
        } catch (e) {
            console.log(e)
            return undefined
        }
    }

    async findLanguageByLesson(id: string): Promise<Language | undefined> {
        try {
            if (id) {
                const lesson = await this.lessonRepository
                    .createQueryBuilder('lesson')
                    .innerJoinAndSelect('lesson.language', 'language')
                    .where('lesson.id = :id', { id })
                    .getOne()

                return lesson?.language
            }
        } catch (e) {
            console.log(e)
            return undefined
        }
    }

    async findPhrasesByLesson(id: string): Promise<Phrase[]> {
        if (id) {
            const phrases = await this.phraseRepository
                .createQueryBuilder('phrase')
                .innerJoin('phrase.lesson', 'lesson')
                .where('lesson.id = :id', { id })
                .orderBy('phrase.phrase', 'ASC')
                .getMany()

            return phrases
        }
        return []
    }

    async getNumOfPhrases(id: string): Promise<number> {
        if (id) {
            const count = await this.phraseRepository
                .createQueryBuilder('phrase')
                .innerJoin('phrase.lesson', 'lesson')
                .where('lesson.id = :id', { id })
                .getCount()
            return count
        }
        return 0
    }

    async isUniqueLessonName(name: string, language: Language) {
        const { id: languageId, name: languageName } = language

        const isUnique =
            (await this.lessonRepository
                .createQueryBuilder('lesson')
                .innerJoin('lesson.language', 'language')
                .where('language.id = :languageId', { languageId })
                .andWhere('lesson.name = :name', { name })
                .getCount()) <= 0

        if (!isUnique) {
            throw new Error(`Lesson: ${name} is already taken for ${languageName}`)
        }

        return isUnique
    }

    async addLesson(input: AddLessonInput): Promise<Lesson> {
        const { name, languageName } = input
        const language = await this.languageRepository.findOne({ name: languageName })
        if (!language) {
            throw new Error('Language does not exist')
        }

        // check uniqueness of the name of lesson
        await this.isUniqueLessonName(name, language)

        const payload = {
            name,
            language,
        }
        return this.lessonRepository.save(this.lessonRepository.create(payload))
    }

    async updateLesson(input: UpdateLessonInput): Promise<Lesson | undefined> {
        const { id, name } = input
        if (!id) {
            throw new Error('Lesson id is missing')
        }

        // check uniqueness of lesson name
        const lesson = await this.lessonRepository.findOneOrFail(id, { relations: ['language'] })

        await this.isUniqueLessonName(name, lesson.language)
        await this.lessonRepository.update(id, { name })
        return this.lessonRepository.findOne(id)
    }
}
