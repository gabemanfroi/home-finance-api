import { ExpenseRepository } from 'modules/transaction/repositories';
import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
} from 'modules/transaction/dtos';
import { Expense } from 'modules/transaction/entities/expense.entity';
import {
  buildExpenseCategoryFromCreateDTO,
  buildExpenseFromCreateDTO,
  buildRandomExpenseCategory,
} from 'utils/mocks/entities/expense.mock';
import { Injectable } from '@nestjs/common';
import { ExpenseCategory } from 'modules/transaction/entities';

@Injectable()
export class ExpenseRepositoryMock implements ExpenseRepository {
  async createExpense(dto: CreateExpenseDTO): Promise<Expense> {
    return buildExpenseFromCreateDTO(dto);
  }

  async findExpenseCategoryByTitle(title: string): Promise<ExpenseCategory> {
    return buildRandomExpenseCategory({ title });
  }

  async createExpenseCategory(
    dto: CreateExpenseCategoryDTO,
  ): Promise<ExpenseCategory> {
    return buildExpenseCategoryFromCreateDTO(dto);
  }
}
