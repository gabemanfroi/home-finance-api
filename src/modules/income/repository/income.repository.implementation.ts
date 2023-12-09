import { IncomeRepository } from 'modules/income/repository/income.repository';
import { Injectable } from '@nestjs/common';
import { CreateIncomeDTO } from '../dtos';
import { Income } from '../income.model';

@Injectable()
export class IncomeRepositoryImplementation implements IncomeRepository {
  constructor() {}

  createExpense(dto: CreateIncomeDTO): Promise<Income> {
    console.log({ dto });
    throw new Error('Method not implemented.');
  }
}
