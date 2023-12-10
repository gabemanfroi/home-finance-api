import { IncomeController } from 'modules/income/controller';
import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
  ReadIncomeCategoryDTO,
  ReadIncomeDTO,
} from 'modules/income/dtos';
import { Body, Controller, Post } from '@nestjs/common';
import { IncomeService } from 'modules/income/service';

@Controller('/incomes')
export class IncomeControllerImplementation implements IncomeController {
  constructor(private readonly expenseService: IncomeService) {}

  @Post()
  async createIncome(@Body() dto: CreateIncomeDTO): Promise<ReadIncomeDTO> {
    return this.expenseService.createIncome(dto);
  }

  @Post('/categories')
  async createIncomeCategory(
    @Body() dto: CreateIncomeCategoryDTO,
  ): Promise<ReadIncomeCategoryDTO> {
    return this.expenseService.createIncomeCategory(dto);
  }
}
