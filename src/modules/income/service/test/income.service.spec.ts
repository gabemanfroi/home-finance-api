import {
  IncomeService,
  IncomeServiceImplementation,
} from 'modules/income/service';
import { IncomeRepository } from 'modules/income/repository';
import { Test } from '@nestjs/testing';
import { buildRandomCreateIncomeDTO, IncomeRepositoryMock } from 'utils/mocks';
import { CreateIncomeDTO, ReadIncomeDTO } from 'modules/income/dtos';

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
});
