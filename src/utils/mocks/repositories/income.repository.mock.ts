import { IncomeRepository } from 'modules/income/repository';
import { CreateIncomeCategoryDTO, CreateIncomeDTO } from 'modules/income/dtos';
import { Income } from 'modules/income/entities/income.entity';
import {
  buildIncomeCategoryFromCreateDTO,
  buildIncomeFromCreateDTO,
} from 'utils/mocks/entities/income.mock';
import { Injectable } from '@nestjs/common';
import { IncomeCategory } from 'modules/income/entities';

@Injectable()
export class IncomeRepositoryMock implements IncomeRepository {
  createIncomeCategory(dto: CreateIncomeCategoryDTO): Promise<IncomeCategory> {
    return Promise.resolve(buildIncomeCategoryFromCreateDTO(dto));
  }

  createIncome(dto: CreateIncomeDTO): Promise<Income> {
    return Promise.resolve(buildIncomeFromCreateDTO(dto));
  }
}
