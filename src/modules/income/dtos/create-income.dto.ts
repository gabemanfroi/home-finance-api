import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
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

  @IsDate()
  @IsNotEmpty()
  date: Date;
}
