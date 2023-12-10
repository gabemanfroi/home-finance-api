import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
  ReadExpenseCategoryDTO,
  ReadExpenseDTO,
} from 'modules/transaction/dtos';

export abstract class ExpenseController {
  abstract createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO>;

  abstract createExpenseCategory(
    dto: CreateExpenseCategoryDTO,
  ): Promise<ReadExpenseCategoryDTO>;
}
