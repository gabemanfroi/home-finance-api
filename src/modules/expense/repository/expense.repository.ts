import { CreateExpenseDTO } from 'modules/expense/dtos';
import { Expense } from 'modules/expense/expense.model';

export abstract class ExpenseRepository {
  abstract createExpense(dto: CreateExpenseDTO): Promise<Expense>;
}
