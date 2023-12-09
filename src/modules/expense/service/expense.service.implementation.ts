import { ExpenseRepository } from '../repository';
import { ExpenseService } from './expense.service';
import { CreateExpenseDTO, ReadExpenseDTO } from 'modules/expense/dtos';

export class ExpenseServiceImplementation implements ExpenseService {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  async createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO> {
    const created = this.expenseRepository.createExpense(dto);
    return new ReadExpenseDTO();
  }
}
