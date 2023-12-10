import { CreateExpenseDTO } from 'modules/expense/dtos';
import { randNumber, randRecentDate, randWord } from '@ngneat/falso';

export const buildRandomCreateExpenseDTO = (
  partial: Partial<CreateExpenseDTO> = {},
): CreateExpenseDTO => {
  const dto: CreateExpenseDTO = {
    userId: randNumber({ fraction: 0 }),
    date: randRecentDate(),
    amount: randNumber({ fraction: 2, precision: 2 }),
    title: randWord(),
    categoriesIds: [],
    ...partial,
  };

  return Object.assign(new CreateExpenseDTO(), dto);
};
