import { IncomeRepository } from 'modules/income/repository/income.repository';
import { Injectable } from '@nestjs/common';
import { CreateIncomeDTO } from 'modules/income/dtos';
import { Income } from 'modules/income/entities/income.entity';

@Injectable()
export class IncomeRepositoryImplementation implements IncomeRepository {
  constructor() {}

  createIncome(dto: CreateIncomeDTO): Promise<Income> {
    console.log({ dto });
    throw new Error('Method not implemented.');
  }
}
