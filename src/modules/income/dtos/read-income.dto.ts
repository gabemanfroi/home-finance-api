import { ReadBaseDTO } from 'modules/shared/dtos/read-base.dto';
import { ReadUserDTO } from 'modules/user/dtos';

export class ReadIncomeDTO extends ReadBaseDTO {
  amount: number;
  categories: {
    id: number;
    name: string;
  }[];
  user: Pick<ReadUserDTO, 'id'>;
  title: string;
  date: Date;
}
