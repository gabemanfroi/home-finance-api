import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
  ReadIncomeCategoryDTO,
  ReadIncomeDTO,
} from 'modules/income/dtos';
import { randNumber, randSoonDate, randWord } from '@ngneat/falso';

export const buildRandomIncomeCategoryDTO = (
  id?: number,
): ReadIncomeCategoryDTO => {
  const dto: ReadIncomeCategoryDTO = {
    title: randWord(),
    id: id ?? randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
  };

  return Object.assign(new ReadIncomeCategoryDTO(), dto);
};

export const buildIncomeReadDTOFromCreateDTO = (
  dto: CreateIncomeDTO,
): ReadIncomeDTO => {
  const readDTO: ReadIncomeDTO = {
    id: randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
    title: dto.title,
    amount: dto.amount,
    date: dto.date,
    userId: dto.userId,
    categories: dto.categoriesIds.map(buildRandomIncomeCategoryDTO),
  };
  return Object.assign(new ReadIncomeDTO(), readDTO);
};

export const buildIncomeCategoryReadDTOFromCreateDTO = (
  dto: CreateIncomeCategoryDTO,
): ReadIncomeCategoryDTO => {
  const readDTO: ReadIncomeCategoryDTO = {
    id: randNumber({ fraction: 0 }),
    createdAt: randSoonDate(),
    updatedAt: randSoonDate(),
    title: dto.title,
  };
  return Object.assign(new ReadIncomeCategoryDTO(), readDTO);
};
