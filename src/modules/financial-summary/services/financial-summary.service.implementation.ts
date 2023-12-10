import { FinancialSummaryService } from 'modules/financial-summary/services/financial-summary.service';
import { ExpenseService, IncomeService } from 'modules/transaction/services';
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
