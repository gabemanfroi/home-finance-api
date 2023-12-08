import { CreateExpenseDTO, ReadExpenseDTO } from "../dtos";
import { ExpenseService } from "../service";
import { ExpenseController } from "./expense.controller";

export class ExpenseControllerImplementation implements ExpenseController{
  constructor(private readonly expenseService: ExpenseService){}

  async createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO> {
    return this.expenseService.createExpense(dto);
  }
}
