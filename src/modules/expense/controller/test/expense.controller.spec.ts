import {
  ExpenseController,
  ExpenseControllerImplementation,
} from 'modules/expense/controller';
import { CreateExpenseDTO, ReadExpenseDTO } from 'modules/expense/dtos';
import { ExpenseService } from 'modules/expense/service';
import { Test } from '@nestjs/testing';
import { ExpenseServiceMock } from 'utils/mocks';

describe('Controllers - [Expense]', () => {
  let expenseController: ExpenseController;
  let expenseService: ExpenseService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ExpenseControllerImplementation],
      providers: [
        {
          provide: ExpenseService,
          useClass: ExpenseServiceMock,
        },
      ],
    }).compile();

    expenseController = module.get<ExpenseControllerImplementation>(
      ExpenseControllerImplementation,
    );
    expenseService = module.get<ExpenseService>(ExpenseService);
  });

  it('should create an expense', async () => {
    const expense: CreateExpenseDTO = {
      amount: 10.0,
      userId: 1,
      title: 'Expense 00',
      categoriesIds: [1, 2, 3, 4, 5],
      date: new Date(),
    };
    jest.spyOn(expenseService, 'createExpense');

    const result = await expenseController.createExpense(expense);
    expect(expenseService.createExpense).toHaveBeenNthCalledWith(1, expense);
    expect(result).toBeInstanceOf(ReadExpenseDTO);
  });
});
