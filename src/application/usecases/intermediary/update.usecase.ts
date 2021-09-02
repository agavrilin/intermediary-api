import { Injectable, Inject } from '@nestjs/common';
import IntermediaryRangeTypeException from 'src/domain/exceptions/intermediary-range-type.exception';
import Intermediary, { IntermediaryTypeEnum } from 'src/domain/intermediary';
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
    if (intermediary.type === IntermediaryTypeEnum.range) {
      this.validateRangeUpdate(intermediary);
    }

    return this.intermediaryRepository.updateIntermediary(intermediaryId, intermediary);
  }

  validateRangeUpdate(intermediary: Intermediary) {
    const { range } = intermediary;

    if (range) {
      const { to, from, step } = range;
      const diff = (to * 1000000 - from * 1000000) % (step * 1000000);

      if (diff !== 0) {
        throw new IntermediaryRangeTypeException(
          'From|To|Step value is not valid',
        );
      }
    }
  }
}
