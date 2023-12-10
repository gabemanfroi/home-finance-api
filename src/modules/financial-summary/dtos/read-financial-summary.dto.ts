import { ReadExpenseDTO, ReadIncomeDTO } from 'modules/transaction/dtos';

export class ReadFinancialSummaryDTO {
  id: string;
  totalIncome: number;
  totalExpense: number;
  totalBalance: number;
  incomes: ReadIncomeDTO[];
  expenses: ReadExpenseDTO[];
  latestTransactions: (ReadIncomeDTO | ReadExpenseDTO)[];
}
