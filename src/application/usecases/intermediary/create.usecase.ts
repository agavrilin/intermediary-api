import { Injectable, Inject } from '@nestjs/common';
import Intermediary from 'src/domain/intermediary';
import { IntermediaryRepository } from 'src/domain/ports/intermediary.repository';
import { IntermediaryCommand } from '../../commands/intermediary.command';
import IntermediaryFactory from '../../factory/intermediary.factory';

@Injectable()
export default class CreateIntermediaryUseCase {
  constructor(
    @Inject('IntermediaryRepository') private intermediaryRepository: IntermediaryRepository,
    private intermediaryFactory: IntermediaryFactory,
  ) {}

  public handler(intermediaryCommand: IntermediaryCommand): Promise<Intermediary | null> {
    const intermediary = this.intermediaryFactory.createIntermediary(intermediaryCommand);
    return this.intermediaryRepository.createIntermediary(intermediary);
  }
}
