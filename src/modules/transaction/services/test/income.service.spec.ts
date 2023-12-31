import {
  IncomeService,
  IncomeServiceImplementation,
} from 'modules/transaction/services';
import { IncomeRepository } from 'modules/transaction/repositories';
import { Test } from '@nestjs/testing';
import {
  buildRandomCreateIncomeCategoryDTO,
  buildRandomCreateIncomeDTO,
  IncomeRepositoryMock,
} from 'utils/mocks';
import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
  ReadIncomeCategoryDTO,
  ReadIncomeDTO,
} from 'modules/transaction/dtos';

describe('Service - [Income]', () => {
  let incomeService: IncomeService;
  let incomeRepository: IncomeRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: IncomeService,
          useClass: IncomeServiceImplementation,
        },
        {
          provide: IncomeRepository,
          useClass: IncomeRepositoryMock,
        },
      ],
    }).compile();

    incomeService = module.get<IncomeService>(IncomeService);
    incomeRepository = module.get<IncomeRepository>(IncomeRepository);
  });

  it('should create an income', async () => {
    const randomCreateIncomeDTO: CreateIncomeDTO = buildRandomCreateIncomeDTO();

    jest.spyOn(incomeRepository, 'createIncome');
    const result = await incomeService.createIncome(randomCreateIncomeDTO);

    expect(incomeRepository.createIncome).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(ReadIncomeDTO);
    expect(result).toMatchObject<ReadIncomeDTO>({
      amount: randomCreateIncomeDTO.amount,
      id: expect.any(Number),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      categories: [],
      userId: randomCreateIncomeDTO.userId,
      title: randomCreateIncomeDTO.title,
      date: randomCreateIncomeDTO.date,
    });
  });
  it('should create an income category', async () => {
    const randomCreateCategoryDTO: CreateIncomeCategoryDTO =
      buildRandomCreateIncomeCategoryDTO();

    jest.spyOn(incomeRepository, 'createIncomeCategory');
    jest
      .spyOn(incomeRepository, 'findIncomeCategoryByTitle')
      .mockResolvedValue(null);

    const result = await incomeService.createIncomeCategory(
      randomCreateCategoryDTO,
    );

    expect(incomeRepository.createIncomeCategory).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(ReadIncomeCategoryDTO);
    expect(result).toMatchObject<ReadIncomeCategoryDTO>({
      title: randomCreateCategoryDTO.title,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      id: expect.any(Number),
    });
  });
  it('should throw an error when creating an income category with an existing name', async () => {
    const randomCreateCategoryDTO: CreateIncomeCategoryDTO =
      buildRandomCreateIncomeCategoryDTO();

    await expect(
      incomeService.createIncomeCategory(randomCreateCategoryDTO),
    ).rejects.toThrow('Income category already exists');
  });
});
