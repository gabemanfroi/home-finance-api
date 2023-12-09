import { Expense } from '../expense.model';
import { CreateIncomeDTO } from 'modules/income/dtos';

export abstract class IncomeRepository {
  abstract createExpense(dto: CreateIncomeDTO): Promise<Expense>;
}
