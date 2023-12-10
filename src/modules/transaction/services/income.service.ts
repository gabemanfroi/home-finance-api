import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
  ReadIncomeCategoryDTO,
  ReadIncomeDTO,
} from 'modules/transaction/dtos';

export abstract class IncomeService {
  abstract createIncome(dto: CreateIncomeDTO): Promise<ReadIncomeDTO>;

  abstract createIncomeCategory(
    dto: CreateIncomeCategoryDTO,
  ): Promise<ReadIncomeCategoryDTO>;
}
