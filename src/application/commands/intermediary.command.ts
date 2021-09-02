import { IntermediaryDropdown, IntermediaryRange, IntermediaryType } from 'src/domain/intermediary';

export interface IntermediaryCommand {
  name: string,
  order: number,
  type: IntermediaryType,
  range?: IntermediaryRange,
  dropdown?: IntermediaryDropdown[],
}
