import {
  IncomeController,
  IncomeControllerImplementation,
} from 'modules/income/controller';
import { CreateIncomeDTO, ReadIncomeDTO } from 'modules/income/dtos';
import { IncomeService } from 'modules/income/service';
import { IncomeServiceMock } from './utils';

describe('Controllers - [Income]', () => {
  let incomeController: IncomeController;
  let incomeService: IncomeService;

  beforeEach(() => {
    incomeService = new IncomeServiceMock();
    incomeController = new IncomeControllerImplementation(incomeService);
  });

  it('should create an income', async () => {
    const income: CreateIncomeDTO = {
      amount: 10.0,
      userId: 1,
      title: 'Income 00',
      categoriesIds: [1, 2, 3, 4, 5],
      date: new Date(),
    };

    jest
      .spyOn(incomeService, 'createIncome')
      .mockImplementation(async (dto: CreateIncomeDTO) => {
        const created = new ReadIncomeDTO();
        created.title = dto.title;
        created.amount = dto.amount;
        return Promise.resolve(created);
      });

    const result = await incomeController.createIncome(income);

    expect(incomeService.createIncome).toHaveBeenNthCalledWith(1, income);
    expect(result).toBeInstanceOf(ReadIncomeDTO);
  });
});
