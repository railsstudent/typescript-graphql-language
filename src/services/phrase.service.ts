import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Lesson, PaginatedPhrase, Phrase, Translation } from '../entity'
import { PhrasePaginationArgs } from '../types'

@Service()
export class PhraseService {
    constructor(
        @InjectRepository(Phrase)
        private readonly phraseRepository: Repository<Phrase>,
        @InjectRepository(Lesson)
        private readonly lessonRepository: Repository<Lesson>,
        @InjectRepository(Translation)
        private readonly translateRepository: Repository<Translation>,
    ) {}

    async getPaginatedPhrases(args: PhrasePaginationArgs): Promise<PaginatedPhrase> {
        try {
            const { page, take, languageName } = args
            const [phrases, total] = await this.phraseRepository
                .createQueryBuilder('phrase')
                .innerJoin('phrase.lesson', 'lesson')
                .innerJoinAndSelect('lesson.language', 'language')
                .where('language.name = :languageName', { languageName })
                .skip(page * take)
                .take(take)
                .getManyAndCount()
            return {
                phrases,
                total,
            }
        } catch (e) {
            console.log(e)
            return { phrases: [], total: 0 }
        }
    }

    async getPhrases(language: string): Promise<Phrase[]> {
        try {
            return this.phraseRepository
                .createQueryBuilder('phrase')
                .innerJoin('phrase.lesson', 'lesson')
                .innerJoinAndSelect('lesson.language', 'language')
                .where('language.name = :language', { language })
                .getMany()
        } catch (e) {
            console.log(e)
            return []
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

    getTranlations(phraseId: string) {
        return this.translateRepository
            .createQueryBuilder('translate')
            .innerJoin('translate.phrase', 'phrase')
            .innerJoinAndSelect('translate.translationLanguage', 'translateLanguage')
            .where('phrase.id = :phraseId', { phraseId })
            .orderBy('translateLanguage.language', 'ASC')
            .getMany()
    }
}
