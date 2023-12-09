import {
  ExpenseService,
  ExpenseServiceImplementation,
} from 'modules/expense/service';
import { ExpenseRepository } from 'modules/expense/repository';
import { Test } from '@nestjs/testing';
import {
  buildRandomCreateExpenseDTO,
  ExpenseRepositoryMock,
} from 'utils/mocks';
import { CreateExpenseDTO, ReadExpenseDTO } from 'modules/expense/dtos';

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

    const result = await expenseService.createExpense(randomCreateExpenseDTO);

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
});
