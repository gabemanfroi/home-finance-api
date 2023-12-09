import {
  ExpenseController,
  ExpenseControllerImplementation,
} from 'modules/expense/controller';
import { CreateExpenseDTO, ReadExpenseDTO } from 'modules/expense/dtos';
import { ExpenseService } from 'modules/expense/service';
import { ExpenseServiceMock } from './utils';

describe('Controllers - [Expense]', () => {
  let expenseController: ExpenseController;
  let expenseService: ExpenseService;

  beforeEach(() => {
    expenseService = new ExpenseServiceMock();
    expenseController = new ExpenseControllerImplementation(expenseService);
  });

  it('should create an expense', async () => {
    const expense: CreateExpenseDTO = {
      amount: 10.0,
      userId: 1,
      title: 'Expense 00',
      categoriesIds: [1, 2, 3, 4, 5],
      date: new Date(),
    };

    jest
      .spyOn(expenseService, 'createExpense')
      .mockImplementation(async (dto: CreateExpenseDTO) => {
        return Promise.resolve(new ReadExpenseDTO());
      });

    const result = await expenseController.createExpense(expense);

    expect(expenseService.createExpense).toHaveBeenNthCalledWith(1, expense);
    expect(result).toBeInstanceOf(ReadExpenseDTO);
  });
});
