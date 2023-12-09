import { ReadBaseDTO } from 'modules/shared/dtos/read-base.dto';
import { ReadUserDTO } from 'modules/user/dtos';

export class ReadExpenseDTO extends ReadBaseDTO {
  total: {
    amount: number;
    currency: string;
  };
  categories: {
    id: number;
    name: string;
  }[];
  user: Pick<ReadUserDTO, 'id'>;
  title: string;
  date: Date;
}
