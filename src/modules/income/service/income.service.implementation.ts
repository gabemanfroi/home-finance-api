import { CreateIncomeDTO, ReadIncomeDTO } from 'modules/income/dtos';
import { IncomeService } from 'modules/income/service';
import { IncomeRepository } from 'modules/income/repository';
import { Injectable } from '@nestjs/common';
import { mapIncomeToReadIncomeDTO } from 'modules/income/mappers';

@Injectable()
export class IncomeServiceImplementation implements IncomeService {
  constructor(private readonly incomeRepository: IncomeRepository) {}

  async createIncome(dto: CreateIncomeDTO): Promise<ReadIncomeDTO> {
    const created = await this.incomeRepository.createIncome(dto);
    return mapIncomeToReadIncomeDTO(created);
  }
}
