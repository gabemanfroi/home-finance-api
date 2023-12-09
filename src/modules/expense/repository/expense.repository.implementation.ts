import { ExpenseRepository } from 'modules/expense/repository/expense.repository';
import { Expense } from '../expense.model';
import { CreateExpenseDTO } from 'modules/expense/dtos';

export class ExpenseRepositoryImplementation implements ExpenseRepository {
  constructor() {}

  createExpense(dto: CreateExpenseDTO): Promise<Expense> {
    console.log({ dto });
    throw new Error('Method not implemented.');
  }
}
