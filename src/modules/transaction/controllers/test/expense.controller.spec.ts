import {
  ExpenseController,
  ExpenseControllerImplementation,
} from 'modules/transaction/controllers/index';
import {
  ReadExpenseCategoryDTO,
  ReadExpenseDTO,
} from 'modules/transaction/dtos';
import { ExpenseService } from 'modules/transaction/services';
import { Test } from '@nestjs/testing';
import {
  buildRandomCreateExpenseDTO,
  buildRandomExpenseCategoryDTO,
  ExpenseServiceMock,
} from 'utils/mocks';

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
    const expense = buildRandomCreateExpenseDTO();

    jest.spyOn(expenseService, 'createExpense');
    const result = await expenseController.createExpense(expense);

    expect(expenseService.createExpense).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(ReadExpenseDTO);
  });
  it('should create an expense category', async () => {
    const expenseCategory = buildRandomExpenseCategoryDTO();

    jest.spyOn(expenseService, 'createExpenseCategory');
    const result =
      await expenseController.createExpenseCategory(expenseCategory);

    expect(expenseService.createExpenseCategory).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(ReadExpenseCategoryDTO);
  });
});
