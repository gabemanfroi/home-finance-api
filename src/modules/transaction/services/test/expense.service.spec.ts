import {
  ExpenseService,
  ExpenseServiceImplementation,
} from 'modules/transaction/services/index';
import { ExpenseRepository } from 'modules/transaction/repositories';
import { Test } from '@nestjs/testing';
import {
  buildRandomCreateExpenseCategoryDTO,
  buildRandomCreateExpenseDTO,
  ExpenseRepositoryMock,
} from 'utils/mocks';
import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
  ReadExpenseCategoryDTO,
  ReadExpenseDTO,
} from 'modules/transaction/dtos';

describe('Service - [Expense]', () => {
  let expenseService: ExpenseService;
  let expenseRepository: ExpenseRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: ExpenseService,
          useClass: ExpenseServiceImplementation,
        },
        {
          provide: ExpenseRepository,
          useClass: ExpenseRepositoryMock,
        },
      ],
    }).compile();

    expenseService = module.get<ExpenseService>(ExpenseService);
    expenseRepository = module.get<ExpenseRepository>(ExpenseRepository);
  });

  it('should create an expense', async () => {
    const randomCreateExpenseDTO: CreateExpenseDTO =
      buildRandomCreateExpenseDTO();

    jest.spyOn(expenseRepository, 'createExpense');
    const result = await expenseService.createExpense(randomCreateExpenseDTO);

    expect(expenseRepository.createExpense).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(ReadExpenseDTO);
    expect(result).toMatchObject<ReadExpenseDTO>({
      amount: randomCreateExpenseDTO.amount,
      id: expect.any(Number),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      categories: [],
      userId: randomCreateExpenseDTO.userId,
      title: randomCreateExpenseDTO.title,
      date: randomCreateExpenseDTO.date,
    });
  });
  it('should create an expense category', async () => {
    const randomCreateCategoryDTO: CreateExpenseCategoryDTO =
      buildRandomCreateExpenseCategoryDTO();

    jest.spyOn(expenseRepository, 'createExpenseCategory');
    jest
      .spyOn(expenseRepository, 'findExpenseCategoryByTitle')
      .mockResolvedValue(null);

    const result = await expenseService.createExpenseCategory(
      randomCreateCategoryDTO,
    );

    expect(expenseRepository.createExpenseCategory).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(ReadExpenseCategoryDTO);
    expect(result).toMatchObject<ReadExpenseCategoryDTO>({
      title: randomCreateCategoryDTO.title,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      id: expect.any(Number),
    });
  });
  it('should throw an error when creating an expense category with an existing name', async () => {
    const randomCreateCategoryDTO: CreateExpenseCategoryDTO =
      buildRandomCreateExpenseCategoryDTO();

    await expect(
      expenseService.createExpenseCategory(randomCreateCategoryDTO),
    ).rejects.toThrow('Expense category already exists');
  });
});
