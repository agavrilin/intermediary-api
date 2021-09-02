import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import { Response } from 'express';

import { IntermediaryCommand } from '../../application/commands/intermediary.command';
import GetAllIntermediarysUseCase from '../../application/usecases/intermediary/getAll.usecase';
import GetIntermediaryUseCase from '../../application/usecases/intermediary/get.usecase';
import Intermediary from '../../domain/intermediary';
import CreateIntermediaryUseCase from '../../application/usecases/intermediary/create.usecase';
import DeleteIntermediaryUseCase from '../../application/usecases/intermediary/delete.usecase';
import UpdateIntermediaryUseCase from '../../application/usecases/intermediary/update.usecase';
import CreateIntermediaryDto from '../dtos/intermediary/create.dto';

@Controller('intermediary/')
export default class IntermediaryController {
  constructor(
    private getAllIntermediarysUseCase: GetAllIntermediarysUseCase,
    private readonly getIntermediaryUseCase: GetIntermediaryUseCase,
    private readonly createIntermediaryUseCase: CreateIntermediaryUseCase,
    private readonly deleteIntermediaryUseCase: DeleteIntermediaryUseCase,
    private readonly updateIntermediaryUseCase: UpdateIntermediaryUseCase,
  ) {}

  @Get()
  public async getIntermediarys(@Res() response: Response): Promise<any> {
    const intermediarys = await this.getAllIntermediarysUseCase.handler();
    return response.status(HttpStatus.OK).json(intermediarys);
  }

  @Get(':id')
  public async getIntermediary(
    @Res() response: Response,
    @Param('id') id: string,
  ): Promise<any> {
    const intermediary = await this.getIntermediaryUseCase.handler(id);
    return response.status(HttpStatus.OK).json(intermediary);
  }

  @Post()
  public async createIntermediary(
    @Res() response: Response,
    @Body() intermediary: CreateIntermediaryDto,
  ): Promise<any> {
    const intermediaryCommand: IntermediaryCommand = intermediary;

    const intermediaryCreated = await this.createIntermediaryUseCase.handler(intermediaryCommand);
    return response.status(HttpStatus.CREATED).json(intermediaryCreated);
  }

  @Delete(':id')
  public async deleteIntermediary(
    @Res() response: Response,
    @Param('id') id: string,
  ): Promise<any> {
    const intermediary = await this.deleteIntermediaryUseCase.handler(id);
    return response.status(HttpStatus.OK).json(intermediary);
  }

  @Put(':id')
  public async updateIntermediary(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() intermediary: Intermediary,
  ): Promise<any> {
    const intermediaryUpdated = await this.updateIntermediaryUseCase.handler(id, intermediary);
    return response.status(HttpStatus.OK).json(intermediaryUpdated);
  }
}
