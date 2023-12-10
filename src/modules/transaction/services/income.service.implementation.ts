import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
  ReadIncomeCategoryDTO,
  ReadIncomeDTO,
} from 'modules/transaction/dtos';
import { IncomeService } from 'modules/transaction/services';
import { IncomeRepository } from 'modules/transaction/repositories';
import { BadRequestException, Injectable } from '@nestjs/common';
import {
  mapIncomeCategoryToReadIncomeCategoryDTO,
  mapIncomeToReadIncomeDTO,
} from 'modules/transaction/mappers';

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
    const found = await this.incomeRepository.findIncomeCategoryByTitle(
      dto.title,
    );

    if (found) {
      throw new BadRequestException('Income category already exists');
    }

    const created = await this.incomeRepository.createIncomeCategory(dto);
    return mapIncomeCategoryToReadIncomeCategoryDTO(created);
  }
}
