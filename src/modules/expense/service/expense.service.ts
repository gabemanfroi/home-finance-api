import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
  ReadExpenseCategoryDTO,
  ReadExpenseDTO,
} from 'modules/expense/dtos';

export abstract class ExpenseService {
  abstract createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO>;

  abstract createExpenseCategory(
    dto: CreateExpenseCategoryDTO,
  ): Promise<ReadExpenseCategoryDTO>;
}
