import { FinancialSummaryService } from 'modules/financial-summary/service/financial-summary.service';
import { IncomeService } from 'modules/income/service';
import { ExpenseService } from 'modules/expense/service';
import { ReadFinancialSummaryDTO } from '../dtos';

export class FinancialSummaryServiceImplementation
  implements FinancialSummaryService
{
  constructor(
    private readonly incomeService: IncomeService,
    private readonly expenseService: ExpenseService,
  ) {}

  getFinancialSummary(): Promise<ReadFinancialSummaryDTO> {
    throw new Error('Method not implemented.');
  }
}
