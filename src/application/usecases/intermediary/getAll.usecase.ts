import { Injectable, Inject } from '@nestjs/common';
import Intermediary from 'src/domain/intermediary';
import { IntermediaryRepository } from 'src/domain/ports/intermediary.repository';

@Injectable()
export default class GetAllIntermediarysUseCase {
  constructor(
    @Inject('IntermediaryRepository') private intermediaryRepository: IntermediaryRepository,
  ) {}

  public handler(): Promise<Intermediary[]> {
    return this.intermediaryRepository.getAll();
  }
}
