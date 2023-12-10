import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
  ReadExpenseCategoryDTO,
  ReadExpenseDTO,
} from 'modules/expense/dtos';
import { ExpenseService } from 'modules/expense/service';
import { ExpenseRepository } from 'modules/expense/repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import {
  mapExpenseCategoryToReadExpenseCategoryDTO,
  mapExpenseToReadExpenseDTO,
} from 'modules/expense/mappers';

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
