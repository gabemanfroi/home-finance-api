import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateIncomeDTO {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsArray()
  @ArrayNotEmpty()
  categoriesIds: number[];

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  @IsNotEmpty()
  date: Date;
}
