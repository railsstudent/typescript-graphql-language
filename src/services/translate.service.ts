import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Translation } from '../entity'

@Service()
export class TranslateService {
    constructor(
        @InjectRepository(Translation)
        private readonly translateRepository: Repository<Translation>,
    ) {}
}
