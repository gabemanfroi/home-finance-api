import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
  ReadIncomeCategoryDTO,
  ReadIncomeDTO,
} from 'modules/income/dtos';

export abstract class IncomeController {
  abstract createIncome(dto: CreateIncomeDTO): Promise<ReadIncomeDTO>;

  abstract createIncomeCategory(
    dto: CreateIncomeCategoryDTO,
  ): Promise<ReadIncomeCategoryDTO>;
}
