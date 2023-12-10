import { IncomeService } from 'modules/income/service';
import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
  ReadIncomeCategoryDTO,
  ReadIncomeDTO,
} from 'modules/income/dtos';
import { Injectable } from '@nestjs/common';
import {
  buildIncomeCategoryReadDTOFromCreateDTO,
  buildIncomeReadDTOFromCreateDTO,
} from 'utils/mocks/dtos/income';

@Injectable()
export class IncomeServiceMock implements IncomeService {
  constructor() {}

  async createIncome(dto: CreateIncomeDTO): Promise<ReadIncomeDTO> {
    return buildIncomeReadDTOFromCreateDTO(dto);
  }

  async createIncomeCategory(
    dto: CreateIncomeCategoryDTO,
  ): Promise<ReadIncomeCategoryDTO> {
    return buildIncomeCategoryReadDTOFromCreateDTO(dto);
  }
}
