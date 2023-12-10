import { ReadFinancialSummaryDTO } from 'modules/financial-summary/dtos';

export abstract class FinancialSummaryService {
  abstract getFinancialSummary(): Promise<ReadFinancialSummaryDTO>;
}
