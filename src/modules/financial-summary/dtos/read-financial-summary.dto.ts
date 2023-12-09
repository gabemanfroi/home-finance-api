import { ReadIncomeDTO } from 'modules/income/dtos';
import { ReadExpenseDTO } from 'modules/expense/dtos';

export class ReadFinancialSummaryDTO {
  id: string;
  totalIncome: number;
  totalExpense: number;
  totalBalance: number;
  incomes: ReadIncomeDTO[];
  expenses: ReadExpenseDTO[];
}
