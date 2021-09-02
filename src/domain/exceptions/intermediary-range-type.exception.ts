/* eslint-disable @typescript-eslint/no-useless-constructor */
export default class IntermediaryRangeTypeException extends Error {
  constructor(message: string) {
    super(message);
  }
}
