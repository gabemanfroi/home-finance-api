import {
  FinancialSummaryController,
  FinancialSummaryControllerImplementation,
} from 'modules/financial-summary/controller';
import { FinancialSummaryService } from 'modules/financial-summary/service';
import { ReadFinancialSummaryDTO } from 'modules/financial-summary/dtos';
import { Test } from '@nestjs/testing';
import { FinancialSummaryServiceMock } from 'utils/mocks';

describe('Controller - [FinancialSummary]', () => {
  let financialSummaryController: FinancialSummaryController;
  let financialSummaryService: FinancialSummaryService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [FinancialSummaryControllerImplementation],
      providers: [
        {
          provide: FinancialSummaryService,
          useClass: FinancialSummaryServiceMock,
        },
      ],
    }).compile();

    financialSummaryController =
      module.get<FinancialSummaryControllerImplementation>(
        FinancialSummaryControllerImplementation,
      );
    financialSummaryService = module.get<FinancialSummaryService>(
      FinancialSummaryService,
    );
  });

  it('should bring a financial summary listing incomes and expenses', async () => {
    jest.spyOn(financialSummaryService, 'getFinancialSummary');

    const result = await financialSummaryController.getFinancialSummary();
    expect(financialSummaryService.getFinancialSummary).toHaveBeenCalled();
    expect(result).toBeInstanceOf(ReadFinancialSummaryDTO);
  });
});
