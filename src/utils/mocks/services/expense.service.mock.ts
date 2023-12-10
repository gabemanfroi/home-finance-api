import { ExpenseService } from 'modules/expense/service';
import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
  ReadExpenseCategoryDTO,
  ReadExpenseDTO,
} from 'modules/expense/dtos';
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
