import { ReadBaseDTO } from 'modules/shared/dtos/read-base.dto';

export class ReadIncomeDTO extends ReadBaseDTO {
  amount: number;
  categories: {
    id: number;
    title: string;
  }[];
  title: string;
  date: Date;
  userId: number;

  constructor(partial: Partial<ReadIncomeDTO> = {}) {
    super();
    Object.assign(this, partial);
  }
}
