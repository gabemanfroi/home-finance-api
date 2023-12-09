import { CreateExpenseDTO } from '../dtos/create-expense.dto';
import { ReadExpenseDTO } from '../dtos/read-expense.dto';

export abstract class ExpenseService {
  abstract createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO>;
}
