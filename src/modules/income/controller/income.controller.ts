import { CreateIncomeDTO, ReadIncomeDTO } from 'modules/income/dtos';

export abstract class IncomeController {
  abstract createIncome(dto: CreateIncomeDTO): Promise<ReadIncomeDTO>;
}
