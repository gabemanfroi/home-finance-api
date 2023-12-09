import { CreateIncomeDTO, ReadIncomeDTO } from 'modules/income/dtos';

export abstract class IncomeService {
  abstract createIncome(dto: CreateIncomeDTO): Promise<ReadIncomeDTO>;
}
