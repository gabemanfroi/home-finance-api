import { CreateExpenseDTO } from 'modules/expense/dtos';
import { randNumber, randRecentDate, randWord } from '@ngneat/falso';

export const buildRandomCreateExpenseDTO = (): CreateExpenseDTO => {
  const dto: CreateExpenseDTO = {
    userId: randNumber({ fraction: 0 }),
    date: randRecentDate(),
    amount: randNumber({ fraction: 2, precision: 2 }),
    title: randWord(),
    categoriesIds: [],
  };

  return Object.assign(new CreateExpenseDTO(), dto);
};

export const buildRandomCreateExpenseForUser = (userId: number) => {
  const dto = buildRandomCreateExpenseDTO();
  dto.userId = userId;

  return dto;
};
