import { ReadExpenseCategoryDTO, ReadExpenseDTO } from 'modules/expense/dtos';
import { Expense, ExpenseCategory } from 'modules/expense/entities';

export const mapExpenseToReadExpenseDTO = (
  expense: Expense,
): ReadExpenseDTO => {
  const { id, user, date, title, categories, amount, updatedAt, createdAt } =
    expense;

  return new ReadExpenseDTO({
    id,
    userId: user.id,
    date,
    title,
    categories: categories.map(mapExpenseCategoryToReadExpenseCategoryDTO),
    createdAt,
    updatedAt,
    amount,
  });
};

export const mapExpenseCategoryToReadExpenseCategoryDTO = (
  expenseCategory: ExpenseCategory,
): ReadExpenseCategoryDTO => {
  const { id, title, createdAt, updatedAt } = expenseCategory;

  return new ReadExpenseCategoryDTO({
    id,
    title,
    createdAt,
    updatedAt,
  });
};
