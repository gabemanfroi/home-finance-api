import { CreateExpenseDTO, ReadExpenseDTO } from 'modules/expense/dtos';

export abstract class ExpenseController {
  abstract createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO>;
}
