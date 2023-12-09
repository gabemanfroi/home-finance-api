import { CreateIncomeDTO } from 'modules/income/dtos';
import { Income } from 'modules/income/income.entity';

export abstract class IncomeRepository {
  abstract createExpense(dto: CreateIncomeDTO): Promise<Income>;
}
