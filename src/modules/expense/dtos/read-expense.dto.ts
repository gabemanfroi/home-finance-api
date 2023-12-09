import { ReadBaseDTO } from 'modules/shared/dtos/read-base.dto';

export class ReadExpenseDTO extends ReadBaseDTO {
  amount: number;
  categories: {
    id: number;
    title: string;
  }[];
  userId: number;
  title: string;
  date: Date;

  constructor(partial: Partial<ReadExpenseDTO> = {}) {
    super();
    Object.assign(this, partial);
  }
}
