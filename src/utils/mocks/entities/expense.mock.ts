import { Expense } from 'modules/transaction/entities/expense.entity';
import { randNumber, randSoonDate, randWord } from '@ngneat/falso';
import { buildRandomUser } from 'utils/mocks/entities/user.mock';
import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
} from 'modules/transaction/dtos';
import { ExpenseCategory } from 'modules/transaction/entities';

export const buildRandomExpenseCategory = (
  partial: Partial<ExpenseCategory> = {},
): ExpenseCategory => {
  const category: ExpenseCategory = {
    title: randWord(),
    id: randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
    ...partial,
  };
  return Object.assign(new ExpenseCategory(), category);
};

export const buildRandomExpense = (partial: Partial<Expense> = {}): Expense => {
  const expense: Expense = {
    id: randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
    amount: randNumber({ min: 1, max: 1000, fraction: 2 }),
    date: randSoonDate(),
    user: buildRandomUser(),
    title: randWord(),
    categories: [buildRandomExpenseCategory()],
    ...partial,
  };

  return Object.assign(new Expense(), expense);
};

export const buildExpenseFromCreateDTO = (dto: CreateExpenseDTO): Expense => {
  const user = buildRandomUser();
  user.id = dto.userId;
  const expense: Expense = {
    id: randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
    amount: dto.amount,
    date: dto.date,
    user,
    title: dto.title,
    categories: dto.categoriesIds.map((id) => {
      return buildRandomExpenseCategory({ id });
    }),
  };

  return Object.assign(new Expense(), expense);
};

export const buildExpenseCategoryFromCreateDTO = (
  dto: CreateExpenseCategoryDTO,
): ExpenseCategory => {
  const category: ExpenseCategory = {
    id: randNumber({ fraction: 0 }),
    title: dto.title,
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
  };
  return Object.assign(new ExpenseCategory(), category);
};
