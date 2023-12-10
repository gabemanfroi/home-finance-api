import { IncomeRepository } from 'modules/income/repository';
import { CreateIncomeCategoryDTO, CreateIncomeDTO } from 'modules/income/dtos';
import { Income, IncomeCategory } from 'modules/income/entities';
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
