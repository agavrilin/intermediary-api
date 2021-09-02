import Intermediary from '../../domain/intermediary';
import { IntermediaryEntity } from '../adapters/repository/entity/intermediary.entity';

export default class IntermediaryMapper {
  public static toDomain(intermediaryEntity: IntermediaryEntity | null): Intermediary | null {
    if (!intermediaryEntity) {
      return null;
    }
    const intermediary = new Intermediary(
      intermediaryEntity.id,
      intermediaryEntity.name,
      intermediaryEntity.order,
      intermediaryEntity.type,
      intermediaryEntity.range,
      intermediaryEntity.dropdown,
    );

    return intermediary;
  }

  public static toDomains(intermediarysEntity: IntermediaryEntity[]): Intermediary[] {
    const intermediarys: Intermediary[] = [];
    intermediarysEntity.forEach((intermediaryEntity) => {
      const intermediary = this.toDomain(intermediaryEntity);
      if (intermediary) {
        intermediarys.push(intermediary);
      }
    });
    return intermediarys;
  }
}
