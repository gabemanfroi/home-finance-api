import { IncomeRepository } from 'modules/income/repository';
import { CreateIncomeDTO } from 'modules/income/dtos';
import { Income } from 'modules/income/entities/income.entity';
import { buildIncomeFromCreateDTO } from 'utils/mocks/entities/income.mock';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IncomeRepositoryMock implements IncomeRepository {
  createIncome(dto: CreateIncomeDTO): Promise<Income> {
    return Promise.resolve(buildIncomeFromCreateDTO(dto));
  }
}
