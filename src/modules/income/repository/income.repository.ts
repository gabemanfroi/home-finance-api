import { CreateIncomeCategoryDTO, CreateIncomeDTO } from 'modules/income/dtos';
import { Income, IncomeCategory } from 'modules/income/entities';

export abstract class IncomeRepository {
  abstract createIncome(dto: CreateIncomeDTO): Promise<Income>;

  abstract createIncomeCategory(
    dto: CreateIncomeCategoryDTO,
  ): Promise<IncomeCategory>;

  abstract findIncomeCategoryByTitle(name: string): Promise<IncomeCategory>;
}
