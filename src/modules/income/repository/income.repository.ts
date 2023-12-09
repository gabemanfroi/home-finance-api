import { CreateIncomeDTO } from 'modules/income/dtos';
import { Income } from 'modules/income/income.model';

export abstract class IncomeRepository {
  abstract createExpense(dto: CreateIncomeDTO): Promise<Income>;
}
