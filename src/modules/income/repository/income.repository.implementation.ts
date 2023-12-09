import { IncomeRepository } from 'modules/income/repository/income.repository';
import { Injectable } from '@nestjs/common';
import { CreateIncomeDTO } from 'modules/income/dtos';
import { Income } from 'modules/income/income.entity';

@Injectable()
export class IncomeRepositoryImplementation implements IncomeRepository {
  constructor() {}

  createExpense(dto: CreateIncomeDTO): Promise<Income> {
    console.log({ dto });
    throw new Error('Method not implemented.');
  }
}
