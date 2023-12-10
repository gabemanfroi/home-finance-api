import {
  IncomeController,
  IncomeControllerImplementation,
} from 'modules/transaction/controllers';
import { ReadIncomeCategoryDTO, ReadIncomeDTO } from 'modules/transaction/dtos';
import { IncomeService } from 'modules/transaction/services';
import { Test } from '@nestjs/testing';
import {
  buildRandomCreateIncomeDTO,
  buildRandomIncomeCategoryDTO,
  IncomeServiceMock,
} from 'utils/mocks';

describe('Controllers - [Income]', () => {
  let incomeController: IncomeController;
  let incomeService: IncomeService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [IncomeControllerImplementation],
      providers: [
        {
          provide: IncomeService,
          useClass: IncomeServiceMock,
        },
      ],
    }).compile();

    incomeController = module.get<IncomeControllerImplementation>(
      IncomeControllerImplementation,
    );
    incomeService = module.get<IncomeService>(IncomeService);
  });

  it('should create an income', async () => {
    const income = buildRandomCreateIncomeDTO();

    jest.spyOn(incomeService, 'createIncome');
    const result = await incomeController.createIncome(income);

    expect(incomeService.createIncome).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(ReadIncomeDTO);
  });
  it('should create an income category', async () => {
    const incomeCategory = buildRandomIncomeCategoryDTO();

    jest.spyOn(incomeService, 'createIncomeCategory');
    const result = await incomeController.createIncomeCategory(incomeCategory);

    expect(incomeService.createIncomeCategory).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(ReadIncomeCategoryDTO);
  });
});
