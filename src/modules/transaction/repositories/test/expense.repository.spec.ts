import { Test } from '@nestjs/testing';
import { buildRandomCreateExpenseDTO, buildRandomUser } from 'utils/mocks';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmServiceMock } from 'utils/mocks/services';
import { Connection } from 'typeorm';
import {
  ExpenseRepository,
  ExpenseRepositoryImplementation,
} from 'modules/transaction/repositories/index';
import { Expense, ExpenseCategory } from 'modules/transaction/entities';
import { User } from 'modules/user';

describe('Repositories - Expense', () => {
  let expenseRepository: ExpenseRepository;
  let typeOrm: Connection;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useClass: TypeOrmServiceMock,
        }),
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env.test',
        }),
        TypeOrmModule.forFeature([Expense, User, ExpenseCategory]),
      ],
      providers: [
        {
          provide: ExpenseRepository,
          useClass: ExpenseRepositoryImplementation,
        },
      ],
    }).compile();

    expenseRepository = module.get<ExpenseRepository>(ExpenseRepository);
    typeOrm = module.get<Connection>(Connection);
  });

  describe('create', () => {
    it('should create a new expense', async () => {
      const { id: userId } = await typeOrm
        .getRepository(User)
        .save(buildRandomUser());

      const { id: categoryId } = await typeOrm
        .getRepository(ExpenseCategory)
        .save({ title: 'Category' });

      const dto = buildRandomCreateExpenseDTO();
      dto.userId = userId;
      dto.categoriesIds = [categoryId];

      const result = await expenseRepository.createExpense(dto);

      expect(result).toBeInstanceOf(Expense);
      expect(result).toMatchObject<Expense>(
        expect.objectContaining<Partial<Expense>>({
          title: dto.title,
          amount: dto.amount,
          date: dto.date,
          updatedAt: expect.any(Date),
          createdAt: expect.any(Date),
          id: expect.any(Number),
        }),
      );
    });
    it('should create a new expense with a user', async () => {
      const user = await typeOrm.getRepository(User).save(buildRandomUser());

      const dto = buildRandomCreateExpenseDTO();
      dto.userId = user.id;

      const result = await expenseRepository.createExpense(dto);

      expect(result.user).toBeInstanceOf(User);
      expect(result.user).toEqual(user);
    });
    it('should create a new expense with categories', async () => {
      const { id: userId } = await typeOrm
        .getRepository(User)
        .save(buildRandomUser());

      const category = await typeOrm
        .getRepository(ExpenseCategory)
        .save({ title: 'Category' });

      const dto = buildRandomCreateExpenseDTO();
      dto.userId = userId;
      dto.categoriesIds = [category.id];

      const result = await expenseRepository.createExpense(dto);

      expect(result.categories).toEqual([category]);
    });
    it('should throw an error if the user does not exist', async () => {
      const dto = buildRandomCreateExpenseDTO();
      dto.userId = -1;

      await expect(expenseRepository.createExpense(dto)).rejects.toThrow();
    });
    it('should throw an error if one of the categories does not exist', async () => {
      const { id: userId } = await typeOrm
        .getRepository(User)
        .save(buildRandomUser());

      const dto = buildRandomCreateExpenseDTO();
      dto.userId = userId;
      dto.categoriesIds = [-1];

      await expect(expenseRepository.createExpense(dto)).rejects.toThrow(
        'One or more category IDs are invalid.',
      );
    });
  });
});
