import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
  ReadExpenseCategoryDTO,
  ReadExpenseDTO,
} from 'modules/transaction/dtos';
import { ExpenseService } from 'modules/transaction/services/index';
import { ExpenseRepository } from 'modules/transaction/repositories';
import { BadRequestException, Injectable } from '@nestjs/common';
import {
  mapExpenseCategoryToReadExpenseCategoryDTO,
  mapExpenseToReadExpenseDTO,
} from 'modules/transaction/mappers';

@Injectable()
export class ExpenseServiceImplementation implements ExpenseService {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  async createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO> {
    const created = await this.expenseRepository.createExpense(dto);
    return mapExpenseToReadExpenseDTO(created);
  }

  async createExpenseCategory(
    dto: CreateExpenseCategoryDTO,
  ): Promise<ReadExpenseCategoryDTO> {
    const found = await this.expenseRepository.findExpenseCategoryByTitle(
      dto.title,
    );

    if (found) {
      throw new BadRequestException('Expense category already exists');
    }

    const created = await this.expenseRepository.createExpenseCategory(dto);
    return mapExpenseCategoryToReadExpenseCategoryDTO(created);
  }
}
