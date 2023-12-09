import { CreateExpenseDTO } from 'modules/expense/dtos';
import { Expense } from 'modules/expense/entities/expense.entity';

export abstract class ExpenseRepository {
  abstract createExpense(dto: CreateExpenseDTO): Promise<Expense>;
}
