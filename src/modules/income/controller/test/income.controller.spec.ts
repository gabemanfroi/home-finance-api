import {
  IncomeController,
  IncomeControllerImplementation,
} from 'modules/income/controller';
import { CreateIncomeDTO, ReadIncomeDTO } from 'modules/income/dtos';
import { IncomeService } from 'modules/income/service';
import { Test } from '@nestjs/testing';
import { IncomeServiceMock } from 'utils/mocks';

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
    const income: CreateIncomeDTO = {
      amount: 10.0,
      userId: 1,
      title: 'Income 00',
      categoriesIds: [1, 2, 3, 4, 5],
      date: new Date(),
    };
    jest.spyOn(incomeService, 'createIncome');
    const result = await incomeController.createIncome(income);

    expect(incomeService.createIncome).toHaveBeenNthCalledWith(1, income);
    expect(result).toBeInstanceOf(ReadIncomeDTO);
  });
});
