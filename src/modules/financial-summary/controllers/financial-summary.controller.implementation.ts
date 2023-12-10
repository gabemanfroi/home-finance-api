import { FinancialSummaryService } from 'modules/financial-summary/services';
import { FinancialSummaryController } from 'modules/financial-summary/controllers/financial-summary.controller';
import { Controller, Get } from '@nestjs/common';

@Controller('/financial-summary')
export class FinancialSummaryControllerImplementation
  implements FinancialSummaryController
{
  constructor(
    private readonly financialSummaryService: FinancialSummaryService,
  ) {}

  @Get('/latest-transactions')
  async getFinancialSummary() {
    return this.financialSummaryService.getFinancialSummary();
  }
}
