import { FinancialSummaryService } from 'modules/financial-summary/service';
import { ReadFinancialSummaryDTO } from 'modules/financial-summary/dtos';

export class FinancialSummaryServiceMock implements FinancialSummaryService {
  getFinancialSummary(): Promise<ReadFinancialSummaryDTO> {
    const financialSummary = new ReadFinancialSummaryDTO();
    financialSummary.incomes = [];
    financialSummary.expenses = [];
    financialSummary.totalBalance = 0;
    financialSummary.totalExpense = 0;
    financialSummary.totalIncome = 0;
    return Promise.resolve(financialSummary);
  }
}
