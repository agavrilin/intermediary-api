import { Injectable, Inject } from '@nestjs/common';
import Intermediary from 'src/domain/intermediary';
import { IntermediaryRepository } from 'src/domain/ports/intermediary.repository';

@Injectable()
export default class UpdateIntermediaryUseCase {
  constructor(
    @Inject('IntermediaryRepository') private intermediaryRepository: IntermediaryRepository,
  ) {}

  public handler(
    intermediaryId: string,
    intermediary: Intermediary,
  ): Promise<Intermediary | null> {
    return this.intermediaryRepository.updateIntermediary(intermediaryId, intermediary);
  }
}
