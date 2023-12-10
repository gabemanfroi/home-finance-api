import { Test } from '@nestjs/testing';
import { buildRandomCreateIncomeDTO, buildRandomUser } from 'utils/mocks';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmServiceMock } from 'utils/mocks/services';
import { Connection } from 'typeorm';
import {
  IncomeRepository,
  IncomeRepositoryImplementation,
} from 'modules/transaction/repositories';
import { Income, IncomeCategory } from 'modules/transaction/entities';
import { User } from 'modules/user';

describe('Repositories - Income', () => {
  let incomeRepository: IncomeRepository;
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
        TypeOrmModule.forFeature([Income, User, IncomeCategory]),
      ],
      providers: [
        {
          provide: IncomeRepository,
          useClass: IncomeRepositoryImplementation,
        },
      ],
    }).compile();

    incomeRepository = module.get<IncomeRepository>(IncomeRepository);
    typeOrm = module.get<Connection>(Connection);
  });

  describe('create', () => {
    it('should create a new income', async () => {
      const { id: userId } = await typeOrm
        .getRepository(User)
        .save(buildRandomUser());

      const { id: categoryId } = await typeOrm
        .getRepository(IncomeCategory)
        .save({ title: 'Category' });

      const dto = buildRandomCreateIncomeDTO();
      dto.userId = userId;
      dto.categoriesIds = [categoryId];

      const result = await incomeRepository.createIncome(dto);

      expect(result).toBeInstanceOf(Income);
      expect(result).toMatchObject<Income>(
        expect.objectContaining<Partial<Income>>({
          title: dto.title,
          amount: dto.amount,
          date: dto.date,
          updatedAt: expect.any(Date),
          createdAt: expect.any(Date),
          id: expect.any(Number),
        }),
      );
    });
    it('should create a new income with a user', async () => {
      const user = await typeOrm.getRepository(User).save(buildRandomUser());

      const dto = buildRandomCreateIncomeDTO();
      dto.userId = user.id;

      const result = await incomeRepository.createIncome(dto);

      expect(result.user).toBeInstanceOf(User);
      expect(result.user).toEqual(user);
    });
    it('should create a new income with categories', async () => {
      const { id: userId } = await typeOrm
        .getRepository(User)
        .save(buildRandomUser());

      const category = await typeOrm
        .getRepository(IncomeCategory)
        .save({ title: 'Category' });

      const dto = buildRandomCreateIncomeDTO();
      dto.userId = userId;
      dto.categoriesIds = [category.id];

      const result = await incomeRepository.createIncome(dto);

      expect(result.categories).toEqual([category]);
    });
    it('should throw an error if the user does not exist', async () => {
      const dto = buildRandomCreateIncomeDTO();
      dto.userId = -1;

      await expect(incomeRepository.createIncome(dto)).rejects.toThrow();
    });
    it('should throw an error if one of the categories does not exist', async () => {
      const { id: userId } = await typeOrm
        .getRepository(User)
        .save(buildRandomUser());

      const dto = buildRandomCreateIncomeDTO();
      dto.userId = userId;
      dto.categoriesIds = [-1];

      await expect(incomeRepository.createIncome(dto)).rejects.toThrow(
        'One or more category IDs are invalid.',
      );
    });
  });
});
