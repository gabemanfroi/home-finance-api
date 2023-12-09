import { IncomeService } from 'modules/income/service';
import { CreateIncomeDTO, ReadIncomeDTO } from 'modules/income/dtos';

export class IncomeServiceMock implements IncomeService {
  constructor() {}

  async createIncome(dto: CreateIncomeDTO): Promise<ReadIncomeDTO> {
    const created = new ReadIncomeDTO();
    created.title = dto.title;
    created.amount = dto.amount;
    return new ReadIncomeDTO();
  }
}
