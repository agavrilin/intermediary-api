/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';
import Intermediary from '../../domain/intermediary';
import { IntermediaryCommand } from '../commands/intermediary.command';

@Injectable()
export default class IntermediaryFactory {
  public createIntermediary(intermediaryCommand: IntermediaryCommand): Intermediary {
    return new Intermediary(
      '',
      intermediaryCommand.name,
      intermediaryCommand.order,
      intermediaryCommand.type,
      intermediaryCommand.range,
      intermediaryCommand.dropdown,
    );
  }
}
