import { IncomeRepository } from '../repository';
import { CreateIncomeDTO, ReadIncomeDTO } from 'modules/income/dtos';
import { IncomeService } from 'modules/income/service';

export class IncomeServiceImplementation implements IncomeService {
  constructor(private readonly expenseRepository: IncomeRepository) {}

  async createIncome(dto: CreateIncomeDTO): Promise<ReadIncomeDTO> {
    const created = this.expenseRepository.createExpense(dto);
    return new ReadIncomeDTO();
  }
}
