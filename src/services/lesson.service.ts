import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Language, Lesson, Phrase } from '../entity'
import { GetLanguageArgs, AddLessonInput } from './../types'

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

    async getLessons(args: GetLanguageArgs): Promise<Lesson[]> {
        let query = this.lessonRepository.createQueryBuilder('lesson')

        if (args) {
            const { id = '', name = '', nativeName = '' } = args
            if (id || name || nativeName) {
                query = query.innerJoinAndSelect('lesson.language', 'language')
            }

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
        return query.getMany()
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
                .innerJoinAndSelect('phrase.lesson', 'lesson')
                .where('lesson.id = :id', { id })
                .orderBy('phrase.phrase', 'ASC')
                .getMany()

            return phrases
        }
        return []
    }

    async addLesson(input: AddLessonInput): Promise<Lesson> {
        const language = await this.languageRepository.findOne({ name: input.languageName })
        if (!language) {
            throw new Error('Language does not exist')
        }

        const payload = {
            name: input.name,
            language,
        }
        return this.lessonRepository.save(this.lessonRepository.create(payload))
    }

    // async updateLanguage(input: UpdateTranslateLanguageInput): Promise<TranslateLanguage | undefined> {
    //     const { id, ...body } = input
    //     if (!id) {
    //         throw new Error('Language id is missing')
    //     }
    //     await this.langRepository.update(id, body)
    //     return this.langRepository.findOne(id)
    // }
}
