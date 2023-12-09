import { ExpenseController } from 'modules/expense/controller/expense.controller';
import { Controller, Post } from '@nestjs/common';

import { CreateExpenseDTO, ReadExpenseDTO } from '../dtos';
import { ExpenseService } from '../service';

@Controller('/expenses')
export class ExpenseControllerImplementation implements ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post('')
  async createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO> {
    return this.expenseService.createExpense(dto);
  }
}
