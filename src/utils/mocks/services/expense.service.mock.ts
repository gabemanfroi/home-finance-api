import { ExpenseService } from 'modules/transaction/services';
import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
  ReadExpenseCategoryDTO,
  ReadExpenseDTO,
} from 'modules/transaction/dtos';
import { Injectable } from '@nestjs/common';
import {
  buildExpenseCategoryReadDTOFromCreateDTO,
  buildExpenseReadDTOFromCreateDTO,
} from 'utils/mocks/dtos/expense';

@Injectable()
export class ExpenseServiceMock implements ExpenseService {
  constructor() {}

  async createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO> {
    return buildExpenseReadDTOFromCreateDTO(dto);
  }

  async createExpenseCategory(
    dto: CreateExpenseCategoryDTO,
  ): Promise<ReadExpenseCategoryDTO> {
    return buildExpenseCategoryReadDTOFromCreateDTO(dto);
  }
}
