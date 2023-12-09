import { CreateIncomeDTO } from 'modules/income/dtos/create-income-d-t.o';
import { Expense } from '../expense.model';

export abstract class IncomeRepository {
  abstract createExpense(dto: CreateIncomeDTO): Promise<Expense>;
}
