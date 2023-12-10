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
  async findIncomeCategoryByTitle(
    name: string | null,
  ): Promise<IncomeCategory> {
    if (!name) {
      return null;
    }
    return buildRandomIncomeCategory({ title: name });
  }

  async createIncomeCategory(
    dto: CreateIncomeCategoryDTO,
  ): Promise<IncomeCategory> {
    return buildIncomeCategoryFromCreateDTO(dto);
  }

  async createIncome(dto: CreateIncomeDTO): Promise<Income> {
    return buildIncomeFromCreateDTO(dto);
  }
}
