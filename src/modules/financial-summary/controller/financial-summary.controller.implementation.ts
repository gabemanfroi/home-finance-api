import { FinancialSummaryService } from 'modules/financial-summary/service';
import { FinancialSummaryController } from 'modules/financial-summary/controller/financial-summary.controller';
import { Controller, Get } from '@nestjs/common';

@Controller('/financial-summary')
export class FinancialSummaryControllerImplementation
  implements FinancialSummaryController
{
  constructor(
    private readonly financialSummaryService: FinancialSummaryService,
  ) {}

  @Get()
  async getFinancialSummary() {
    return this.financialSummaryService.getFinancialSummary();
  }
}
