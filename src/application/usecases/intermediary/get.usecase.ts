import { Injectable, Inject } from '@nestjs/common';
import Intermediary from 'src/domain/intermediary';
import { IntermediaryRepository } from 'src/domain/ports/intermediary.repository';

@Injectable()
export default class GetIntermediaryUseCase {
  constructor(
    @Inject('IntermediaryRepository') private intermediaryRepository: IntermediaryRepository,
  ) {}

  public handler(intermediaryId: string): Promise<Intermediary | null> {
    return this.intermediaryRepository.getIntermediary(intermediaryId);
  }
}
