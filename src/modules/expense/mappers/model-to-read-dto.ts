import { ReadExpenseDTO } from 'modules/expense/dtos';
import { Expense } from 'modules/expense/entities/expense.entity';

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
    categories: categories.map((category) => ({
      id: category.id,
      title: category.title,
    })),
    createdAt,
    updatedAt,
    amount,
  });
};
