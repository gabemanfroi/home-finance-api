import { ReadIncomeDTO } from 'modules/income/dtos';
import { Income } from 'modules/income/entities/income.entity';

export const mapIncomeToReadIncomeDTO = (income: Income): ReadIncomeDTO => {
  const { id, user, date, title, categories, amount, updatedAt, createdAt } =
    income;

  return new ReadIncomeDTO({
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
