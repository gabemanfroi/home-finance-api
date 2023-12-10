import { ExpenseController } from 'modules/transaction/controllers/index';
import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
  ReadExpenseCategoryDTO,
  ReadExpenseDTO,
} from 'modules/transaction/dtos';
import { Body, Controller, Post } from '@nestjs/common';
import { ExpenseService } from 'modules/transaction/services';

@Controller('/expenses')
export class ExpenseControllerImplementation implements ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  async createExpense(@Body() dto: CreateExpenseDTO): Promise<ReadExpenseDTO> {
    return this.expenseService.createExpense(dto);
  }

  @Post('/categories')
  async createExpenseCategory(
    @Body() dto: CreateExpenseCategoryDTO,
  ): Promise<ReadExpenseCategoryDTO> {
    return this.expenseService.createExpenseCategory(dto);
  }
}
