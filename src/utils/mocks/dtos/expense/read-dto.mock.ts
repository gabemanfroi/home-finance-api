import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
  ReadExpenseCategoryDTO,
  ReadExpenseDTO,
} from 'modules/expense/dtos';
import { randNumber, randSoonDate, randWord } from '@ngneat/falso';

export const buildRandomExpenseCategoryDTO = (
  id?: number,
): ReadExpenseCategoryDTO => {
  const dto: ReadExpenseCategoryDTO = {
    title: randWord(),
    id: id ?? randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
  };

  return Object.assign(new ReadExpenseCategoryDTO(), dto);
};

export const buildExpenseReadDTOFromCreateDTO = (
  dto: CreateExpenseDTO,
): ReadExpenseDTO => {
  const readDTO: ReadExpenseDTO = {
    id: randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
    title: dto.title,
    amount: dto.amount,
    date: dto.date,
    userId: dto.userId,
    categories: dto.categoriesIds.map(buildRandomExpenseCategoryDTO),
  };
  return Object.assign(new ReadExpenseDTO(), readDTO);
};

export const buildExpenseCategoryReadDTOFromCreateDTO = (
  dto: CreateExpenseCategoryDTO,
): ReadExpenseCategoryDTO => {
  const readDTO: ReadExpenseCategoryDTO = {
    id: randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
    title: dto.title,
  };
  return Object.assign(new ReadExpenseCategoryDTO(), readDTO);
};
