import IntermediaryRangeTypeException from './exceptions/intermediary-range-type.exception';

export const IntermediaryTypeEnum = {
  range: 'range',
  dropdown: 'dropdown',
};

export type IntermediaryType = 'range' | 'dropdown';

export interface IntermediaryRange {
  from: number,
  to: number,
  step: number,
}

export interface IntermediaryDropdown {
  option: string,
  value: number,
}

export default class Intermediary {
  id: string;

  readonly name: string;

  readonly order: number;

  readonly type: IntermediaryType;

  readonly range?: IntermediaryRange;

  readonly dropdown?: IntermediaryDropdown[];

  constructor(
    id: string,
    name: string,
    order: number,
    type: IntermediaryType,
    range?: IntermediaryRange,
    dropdown?: IntermediaryDropdown[],
  ) {
    this.id = id;
    this.name = name;
    this.order = order;
    this.type = type;

    if (type === IntermediaryTypeEnum.range) {
      this.range = range;

      this.validateRangeType();
    }

    if (type === IntermediaryTypeEnum.dropdown) {
      this.dropdown = dropdown;
    }
  }

  public validateRangeType(): void {
    const { range } = this;

    if (range) {
      const { from, to, step } = range;

      if (from >= to) {
        throw new IntermediaryRangeTypeException(
          'From value should be less than To',
        );
      }

      if (step <= 0) {
        throw new IntermediaryRangeTypeException(
          'Step values should be greater than zero',
        );
      }

      const diff = (to * 1000000 - from * 1000000) % (step * 1000000);

      if (diff !== 0) {
        throw new IntermediaryRangeTypeException(
          'From|To|Step value is not valid',
        );
      }
    }
  }

  public getName(): string {
    return this.name;
  }

  public getId(): string {
    return this.id;
  }
}
