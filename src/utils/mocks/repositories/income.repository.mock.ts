import { IncomeRepository } from 'modules/transaction/repositories';
import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
} from 'modules/transaction/dtos';
import { Income, IncomeCategory } from 'modules/transaction/entities';
import {
  buildIncomeCategoryFromCreateDTO,
  buildIncomeFromCreateDTO,
  buildRandomIncomeCategory,
} from 'utils/mocks/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IncomeRepositoryMock implements IncomeRepository {
  async createIncome(dto: CreateIncomeDTO): Promise<Income> {
    return buildIncomeFromCreateDTO(dto);
  }

  async findIncomeCategoryByTitle(title: string): Promise<IncomeCategory> {
    return buildRandomIncomeCategory({ title });
  }

  async createIncomeCategory(
    dto: CreateIncomeCategoryDTO,
  ): Promise<IncomeCategory> {
    return buildIncomeCategoryFromCreateDTO(dto);
  }
}
