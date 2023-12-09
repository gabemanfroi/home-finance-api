import { ExpenseRepository } from 'modules/expense/repository';
import { Expense } from 'modules/expense/entities/expense.entity';
import { CreateExpenseDTO } from 'modules/expense/dtos';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class ExpenseRepositoryImplementation implements ExpenseRepository {
  constructor(
    @InjectRepository(Expense)
    private readonly typeOrmExpenseRepository: Repository<Expense>,
  ) {}

  async createExpense(dto: CreateExpenseDTO): Promise<Expense> {
    const expense = new Expense({
      title: dto.title,
      amount: dto.amount,
      date: dto.date,
      userId: dto.userId,
    });
    const created = await this.typeOrmExpenseRepository.save(expense);

    return await this.typeOrmExpenseRepository.findOne({
      where: { id: created.id },
      relations: ['user'],
    });
  }
}
