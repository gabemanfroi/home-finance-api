import { CreateExpenseDTO, ReadExpenseDTO } from 'modules/expense/dtos';

export abstract class ExpenseService {
  abstract createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO>;
}
