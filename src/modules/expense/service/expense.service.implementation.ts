import { CreateExpenseDTO } from "../dtos/create-expense.dto";
import { ReadExpenseDTO } from "../dtos/read-expense.dto";
import { ExpenseRepository } from "../repository";
import { ExpenseService } from "./expense.service";

export class ExpenseControllerImplementation implements ExpenseService {
  constructor(private readonly expenseRepository: ExpenseRepository) { }
  async createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO> {
    const created = this.expenseRepository.createExpense(dto);
    return new ReadExpenseDTO();
  }
}
