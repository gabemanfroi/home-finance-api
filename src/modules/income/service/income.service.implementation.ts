import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
  ReadIncomeCategoryDTO,
  ReadIncomeDTO,
} from 'modules/income/dtos';
import { IncomeService } from 'modules/income/service';
import { IncomeRepository } from 'modules/income/repository';
import { Injectable } from '@nestjs/common';
import {
  mapIncomeCategoryToReadIncomeCategoryDTO,
  mapIncomeToReadIncomeDTO,
} from 'modules/income/mappers';

@Injectable()
export class IncomeServiceImplementation implements IncomeService {
  constructor(private readonly incomeRepository: IncomeRepository) {}

  async createIncome(dto: CreateIncomeDTO): Promise<ReadIncomeDTO> {
    const created = await this.incomeRepository.createIncome(dto);
    return mapIncomeToReadIncomeDTO(created);
  }

  async createIncomeCategory(
    dto: CreateIncomeCategoryDTO,
  ): Promise<ReadIncomeCategoryDTO> {
    const created = await this.incomeRepository.createIncomeCategory(dto);
    return mapIncomeCategoryToReadIncomeCategoryDTO(created);
  }
}
