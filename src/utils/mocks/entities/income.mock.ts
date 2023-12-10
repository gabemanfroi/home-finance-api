import { Income, IncomeCategory } from 'modules/income/entities';
import { randNumber, randSoonDate, randWord } from '@ngneat/falso';
import { buildRandomUser } from 'utils/mocks/entities/user.mock';
import { CreateIncomeCategoryDTO, CreateIncomeDTO } from 'modules/income/dtos';

export const buildRandomIncome = (partial: Partial<Income> = {}): Income => {
  const income: Income = {
    id: randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
    amount: randNumber({ min: 1, max: 1000, fraction: 2 }),
    date: randSoonDate(),
    user: buildRandomUser(),
    title: randWord(),
    categories: [buildRandomIncomeCategory()],
    ...partial,
  };

  return Object.assign(new Income(), income);
};

export const buildIncomeFromCreateDTO = (dto: CreateIncomeDTO): Income => {
  const user = buildRandomUser();
  user.id = dto.userId;
  const income: Income = {
    id: randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
    amount: dto.amount,
    date: dto.date,
    user,
    title: dto.title,
    categories: dto.categoriesIds.map((id) => {
      return buildRandomIncomeCategory({ id });
    }),
  };

  return Object.assign(new Income(), income);
};

export const buildRandomIncomeCategory = (
  partial: Partial<IncomeCategory> = {},
): IncomeCategory => {
  const category: IncomeCategory = {
    title: randWord(),
    id: randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
    ...partial,
  };
  return Object.assign(new IncomeCategory(), category);
};

export const buildIncomeCategoryFromCreateDTO = (
  dto: CreateIncomeCategoryDTO,
): IncomeCategory => {
  const category: IncomeCategory = {
    id: randNumber({ fraction: 0 }),
    title: dto.title,
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
  };
  return Object.assign(new IncomeCategory(), category);
};
