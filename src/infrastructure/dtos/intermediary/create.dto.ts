/* eslint-disable max-classes-per-file */
import {
  IsEnum, IsNotEmpty, IsNumber, IsString, MaxLength,
} from 'class-validator';
import { IntermediaryType } from 'src/domain/intermediary';

export const IntermediaryTypes: IntermediaryType[] = [
  'range',
  'dropdown',
];

export default class CreateIntermediaryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string = '';

  @IsNumber()
  @IsNotEmpty()
  order: number = 0;

  @IsEnum(IntermediaryTypes)
  @IsNotEmpty()
  type: IntermediaryType = 'range';
}
