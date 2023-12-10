import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIncomeCategoryDTO {
  @IsString()
  @IsNotEmpty()
  title: string;
}
