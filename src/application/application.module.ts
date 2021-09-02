import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import IntermediaryRepositoryMongo from '../infrastructure/adapters/repository/intermediary.repository.mongo';
import IntermediarySchema from '../infrastructure/adapters/repository/schema/intermediary.schema';
import GetAllIntermediarysUseCase from './usecases/intermediary/getAll.usecase';
import DomainModule from '../domain/domain.module';
import GetIntermediaryUseCase from './usecases/intermediary/get.usecase';
import CreateIntermediaryUseCase from './usecases/intermediary/create.usecase';
import DeleteIntermediaryUseCase from './usecases/intermediary/delete.usecase';
import UpdateIntermediaryUseCase from './usecases/intermediary/update.usecase';
import IntermediaryFactory from './factory/intermediary.factory';

@Module({
  imports: [
    DomainModule,
    MongooseModule.forFeature([
      {
        name: 'Intermediary',
        schema: IntermediarySchema,
      },
    ]),
  ],
  providers: [
    IntermediaryFactory,
    GetAllIntermediarysUseCase,
    GetIntermediaryUseCase,
    CreateIntermediaryUseCase,
    DeleteIntermediaryUseCase,
    UpdateIntermediaryUseCase,
    {
      provide: 'IntermediaryRepository',
      useClass: IntermediaryRepositoryMongo,
    },
  ],
  exports: [
    IntermediaryFactory,
    GetAllIntermediarysUseCase,
    GetIntermediaryUseCase,
    CreateIntermediaryUseCase,
    DeleteIntermediaryUseCase,
    UpdateIntermediaryUseCase,
  ],
})
export default class ApplicationModule {}
