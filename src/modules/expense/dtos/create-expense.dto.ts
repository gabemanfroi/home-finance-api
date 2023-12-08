import { ArrayNotEmpty, IsArray, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExpenseDTO {
  @IsNotEmpty()
  total: {
    amount: number,
    currency: string
  };

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
  date: Date

}
