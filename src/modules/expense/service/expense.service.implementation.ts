import { ExpenseRepository } from '../repository';
import { ExpenseService } from './expense.service';
import { CreateExpenseDTO, ReadExpenseDTO } from 'modules/expense/dtos';
import { Injectable } from '@nestjs/common';
import { mapExpenseToReadExpenseDTO } from 'modules/expense/mappers';

@Injectable()
export class ExpenseServiceImplementation implements ExpenseService {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  async createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO> {
    const created = await this.expenseRepository.createExpense(dto);
    return mapExpenseToReadExpenseDTO(created);
  }
}
