import { IncomeController } from 'modules/income/controller';
import { IncomeService } from 'modules/income/service';
import { CreateIncomeDTO, ReadIncomeDTO } from 'modules/income/dtos';

export class IncomeControllerImplementation implements IncomeController {
  constructor(private readonly expenseService: IncomeService) {}

  async createIncome(dto: CreateIncomeDTO): Promise<ReadIncomeDTO> {
    return this.expenseService.createIncome(dto);
  }
}
