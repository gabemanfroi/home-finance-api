import { CreateIncomeDTO } from 'modules/income/dtos';
import { Income } from 'modules/income/entities';

export abstract class IncomeRepository {
  abstract createIncome(dto: CreateIncomeDTO): Promise<Income>;
}
