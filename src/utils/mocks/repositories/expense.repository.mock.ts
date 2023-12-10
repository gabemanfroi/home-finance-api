import { ExpenseRepository } from 'modules/expense/repository';
import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
} from 'modules/expense/dtos';
import { Expense } from 'modules/expense/entities/expense.entity';
import {
  buildExpenseCategoryFromCreateDTO,
  buildExpenseFromCreateDTO,
  buildRandomExpenseCategory,
} from 'utils/mocks/entities/expense.mock';
import { Injectable } from '@nestjs/common';
import { ExpenseCategory } from 'modules/expense/entities';

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
