import { ExpenseRepository } from 'modules/expense/repository';
import { CreateExpenseDTO } from 'modules/expense/dtos';
import { Expense } from 'modules/expense/entities/expense.entity';
import { buildExpenseFromCreateDTO } from 'utils/mocks/entities/expense.mock';

export class ExpenseRepositoryMock implements ExpenseRepository {
  createExpense(dto: CreateExpenseDTO): Promise<Expense> {
    return Promise.resolve(buildExpenseFromCreateDTO(dto));
  }
}
