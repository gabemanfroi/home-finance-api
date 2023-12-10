import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExpenseCategoryDTO {
  @IsString()
  @IsNotEmpty()
  title: string;
}
