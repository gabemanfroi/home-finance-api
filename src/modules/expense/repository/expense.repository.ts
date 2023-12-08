import { CreateExpenseDTO } from "../dtos/create-expense.dto";
import { Expense } from "../expense.model";

export abstract class ExpenseRepository {
  abstract createExpense(dto: CreateExpenseDTO): Promise<Expense>;
}
