import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ApplicationModule from '../application/application.module';
import IntermediarySchema from './adapters/repository/schema/intermediary.schema';
import IntermediaryController from './controllers/intermediary.controller';
import ConfigModule from './config.module';
import ConfigService from './config.service';

const dbUri = 'MONGO_SERVER_URL';
const dbPort = 'MONGO_SERVER_PORT';
const dbName = 'MONGO_SERVER_DBNAME';

@Module({})
export default class InfrastructureModule {
  static foorRoot(): DynamicModule {
    return {
      module: InfrastructureModule,
      imports: [
        ApplicationModule,
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => ({
            uri: `mongodb://${configService.get(dbUri)}:${configService.get(dbPort)}/${configService.get(dbName)}`,
          }),
          inject: [ConfigService],
        }),
        MongooseModule.forFeature([{ name: 'Intermediary', schema: IntermediarySchema }]),
      ],
      controllers: [IntermediaryController],
    };
  }
}
