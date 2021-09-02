import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import Intermediary from 'src/domain/intermediary';
import { IntermediaryEntity } from 'src/infrastructure/adapters/repository/entity/intermediary.entity';
import IntermediaryMapper from '../../mapper/intermediary.mapper';
import { IntermediaryRepository } from '../../../domain/ports/intermediary.repository';

@Injectable()
export default class IntermediaryRepositoryMongo implements IntermediaryRepository {
  constructor(
    @InjectModel('Intermediary') private readonly IntermediaryModel: Model<IntermediaryEntity>,
  ) {}

  public async getAll(): Promise<Intermediary[]> {
    const intermediarys = await this.IntermediaryModel.find();
    return IntermediaryMapper.toDomains(intermediarys);
  }

  public async createIntermediary(intermediary: Intermediary): Promise<Intermediary | null> {
    let intermediaryCreated = new this.IntermediaryModel(intermediary);
    intermediaryCreated = await intermediaryCreated.save();
    return IntermediaryMapper.toDomain(intermediaryCreated);
  }

  public async getIntermediary(intermediaryId: string): Promise<Intermediary | null> {
    const intermediary = await this.IntermediaryModel.findById(intermediaryId);
    return IntermediaryMapper.toDomain(intermediary);
  }

  public async deleteIntermediary(intermediaryId: string): Promise<Intermediary | null> {
    const intermediaryDeleted = await this.IntermediaryModel.findByIdAndDelete(intermediaryId);
    return IntermediaryMapper.toDomain(intermediaryDeleted);
  }

  public async updateIntermediary(
    intermediaryId: string,
    intermediary: Intermediary,
  ): Promise<Intermediary | null> {
    const intermediaryUpdated = await this.IntermediaryModel.findByIdAndUpdate(
      intermediaryId,
      intermediary,
      { new: true },
    );
    return IntermediaryMapper.toDomain(intermediaryUpdated);
  }
}
