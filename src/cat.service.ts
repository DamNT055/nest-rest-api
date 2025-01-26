import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  constructor(
    @Inject('CAT_REPOSITORY')
    private readonly catRepository: typeof Cat,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catRepository.findAll();
  }
}
