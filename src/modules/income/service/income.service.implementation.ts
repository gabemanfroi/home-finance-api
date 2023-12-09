import { IncomeRepository } from '../repository';
import { IncomeService } from 'modules/income/service/incomeService';
import { CreateIncomeDTO, ReadIncomeDTO } from 'modules/income/dtos';

export class IncomeServiceImplementation implements IncomeService {
  constructor(private readonly expenseRepository: IncomeRepository) {}

  async createIncome(dto: CreateIncomeDTO): Promise<ReadIncomeDTO> {
    const created = this.expenseRepository.createExpense(dto);
    return new ReadIncomeDTO();
  }
}
