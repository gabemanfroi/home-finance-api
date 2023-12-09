import {
  ExpenseService,
  ExpenseServiceImplementation,
} from 'modules/expense/service';
import {
  ExpenseRepository,
  ExpenseRepositoryImplementation,
} from 'modules/expense/repository';
import { Test } from '@nestjs/testing';

describe('Service - [Expense]', () => {
  let expenseService: ExpenseService;
  let expenseRepository: ExpenseRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: ExpenseService,
          useValue: ExpenseServiceImplementation,
        },
        {
          provide: ExpenseRepository,
          useValue: ExpenseRepositoryImplementation,
        },
      ],
    }).compile();

    expenseService = module.get<ExpenseService>(ExpenseService);
    expenseRepository = module.get<ExpenseRepository>(ExpenseRepository);
  });

  it('should create an expense', () => {});
});
