import { ReadFinancialSummaryDTO } from 'modules/financial-summary/dtos';

export abstract class FinancialSummaryController {
  abstract getFinancialSummary(): Promise<ReadFinancialSummaryDTO>;
}
