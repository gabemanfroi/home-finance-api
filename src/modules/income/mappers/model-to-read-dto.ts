import { ReadIncomeCategoryDTO, ReadIncomeDTO } from 'modules/income/dtos';
import { Income, IncomeCategory } from 'modules/income/entities';

export const mapIncomeToReadIncomeDTO = (income: Income): ReadIncomeDTO => {
  const { id, user, date, title, categories, amount, updatedAt, createdAt } =
    income;

  return new ReadIncomeDTO({
    id,
    userId: user.id,
    date,
    title,
    categories: categories.map(mapIncomeCategoryToReadIncomeCategoryDTO),
    createdAt,
    updatedAt,
    amount,
  });
};

export const mapIncomeCategoryToReadIncomeCategoryDTO = (
  incomeCategory: IncomeCategory,
): ReadIncomeCategoryDTO => {
  const { id, title, createdAt, updatedAt } = incomeCategory;

  return new ReadIncomeCategoryDTO({
    id,
    title,
    createdAt,
    updatedAt,
  });
};
