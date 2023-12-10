import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
} from 'modules/transaction/dtos';
import { Income, IncomeCategory } from 'modules/transaction/entities';

export abstract class IncomeRepository {
  abstract createIncome(dto: CreateIncomeDTO): Promise<Income>;

  abstract createIncomeCategory(
    dto: CreateIncomeCategoryDTO,
  ): Promise<IncomeCategory>;

  abstract findIncomeCategoryByTitle(title: string): Promise<IncomeCategory>;
}
