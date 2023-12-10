import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
} from 'modules/transaction/dtos';
import { randNumber, randRecentDate, randWord } from '@ngneat/falso';

export const buildRandomCreateIncomeDTO = (
  partial: Partial<CreateIncomeDTO> = {},
): CreateIncomeDTO => {
  const dto: CreateIncomeDTO = {
    userId: randNumber({ fraction: 0 }),
    date: randRecentDate(),
    amount: randNumber({ fraction: 2, precision: 2 }),
    title: randWord(),
    categoriesIds: [],
    ...partial,
  };

  return Object.assign(new CreateIncomeDTO(), dto);
};

export const buildRandomCreateIncomeCategoryDTO = (
  partial: Partial<CreateIncomeCategoryDTO> = {},
): CreateIncomeCategoryDTO => {
  const dto = {
    title: randWord(),
    ...partial,
  };

  return Object.assign(new CreateIncomeDTO(), dto);
};
