import { ExpenseRepository } from 'modules/expense/repository';
import { CreateExpenseDTO } from 'modules/expense/dtos';
import { Expense } from 'modules/expense/entities/expense.entity';

export class ExpenseRepositoryMock implements ExpenseRepository {
  createExpense(dto: CreateExpenseDTO): Promise<Expense> {
    const expense = new Expense();
    expense.id = 1;
    expense.title = dto.title;
    expense.amount = dto.amount;
    expense.date = dto.date;
    expense.categories = [];
    return Promise.resolve(expense);
  }
}
