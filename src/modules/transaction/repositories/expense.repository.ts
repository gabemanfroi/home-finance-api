import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
} from 'modules/transaction/dtos';
import { Expense } from 'modules/transaction/entities/expense.entity';
import { ExpenseCategory } from 'modules/transaction/entities';

export abstract class ExpenseRepository {
  abstract createExpense(dto: CreateExpenseDTO): Promise<Expense>;

  abstract createExpenseCategory(
    dto: CreateExpenseCategoryDTO,
  ): Promise<ExpenseCategory>;

  abstract findExpenseCategoryByTitle(title: string): Promise<ExpenseCategory>;
}
