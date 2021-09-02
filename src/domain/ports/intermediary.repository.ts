import Intermediary from 'src/domain/intermediary';

export interface IntermediaryRepository {
  getAll(): Promise<Intermediary[]>;

  /**
   * Returns intermediary filtered by id
   * @param {string} intermediaryId
   * @returns a `Intermediary` object containing the data.
   */
  getIntermediary(id: string): Promise<Intermediary | null>;

  createIntermediary(intermediary: Intermediary): Promise<Intermediary | null>;

  deleteIntermediary(intermediaryId: string): Promise<Intermediary | null>;

  updateIntermediary(
    intermediaryId: string,
    intermediary: Intermediary,
  ): Promise<Intermediary | null>;
}
