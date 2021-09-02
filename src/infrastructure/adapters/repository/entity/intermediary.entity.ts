import { Document } from 'mongoose';
import { IntermediaryDropdown, IntermediaryRange, IntermediaryType } from 'src/domain/intermediary';

export interface IntermediaryEntity extends Document {
  id: string;
  readonly name: string;
  readonly order: number;
  readonly type: IntermediaryType;
  readonly range?: IntermediaryRange;
  readonly dropdown?: IntermediaryDropdown[];
}
