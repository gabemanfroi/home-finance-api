import { CreateExpenseDTO, ReadExpenseDTO } from "modules/expense/dtos";
import { ExpenseService } from "modules/expense/service";

export class ExpenseServiceMock implements ExpenseService{
  constructor(){}

  async createExpense(dto: CreateExpenseDTO): Promise<ReadExpenseDTO> {
    return new ReadExpenseDTO();
  }
}
