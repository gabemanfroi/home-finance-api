import { ReadBaseDTO } from 'modules/shared/dtos/read-base.dto';
import { ReadIncomeCategoryDTO } from 'modules/income/dtos';

export class ReadIncomeDTO extends ReadBaseDTO {
  amount: number;
  categories: ReadIncomeCategoryDTO[];
  title: string;
  date: Date;
  userId: number;

  constructor(partial: Partial<ReadIncomeDTO> = {}) {
    super();
    Object.assign(this, partial);
  }
}
