import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
} from 'modules/expense/dtos';
import { Expense } from 'modules/expense/entities/expense.entity';
import { ExpenseCategory } from 'modules/expense/entities';

export abstract class ExpenseRepository {
  abstract createExpense(dto: CreateExpenseDTO): Promise<Expense>;

  abstract createExpenseCategory(
    dto: CreateExpenseCategoryDTO,
  ): Promise<ExpenseCategory>;

  abstract findExpenseCategoryByTitle(title: string): Promise<ExpenseCategory>;
}
