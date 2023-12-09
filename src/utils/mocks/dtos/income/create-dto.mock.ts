import { CreateIncomeDTO } from 'modules/income/dtos';
import { randNumber, randRecentDate, randWord } from '@ngneat/falso';

export const buildRandomCreateIncomeDTO = (): CreateIncomeDTO => {
  const dto: CreateIncomeDTO = {
    userId: randNumber({ fraction: 0 }),
    date: randRecentDate(),
    amount: randNumber({ fraction: 2, precision: 2 }),
    title: randWord(),
    categoriesIds: [],
  };

  return Object.assign(new CreateIncomeDTO(), dto);
};

export const buildRandomCreateIncomeForUser = (userId: number) => {
  const dto = buildRandomCreateIncomeDTO();
  dto.userId = userId;

  return dto;
};
