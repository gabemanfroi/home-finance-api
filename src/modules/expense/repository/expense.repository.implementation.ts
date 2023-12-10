import { ExpenseRepository } from 'modules/expense/repository';
import {
  CreateExpenseCategoryDTO,
  CreateExpenseDTO,
} from 'modules/expense/dtos';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense, ExpenseCategory } from 'modules/expense/entities';
import { BadRequestException } from '@nestjs/common';

export class ExpenseRepositoryImplementation implements ExpenseRepository {
  constructor(
    @InjectRepository(Expense)
    private readonly typeOrmExpenseRepository: Repository<Expense>,
    @InjectRepository(ExpenseCategory)
    private readonly typeOrmExpenseCategoryRepository: Repository<ExpenseCategory>,
  ) {}

  async createExpense(dto: CreateExpenseDTO): Promise<Expense> {
    const categories = await this.typeOrmExpenseCategoryRepository.findBy({
      id: In(dto.categoriesIds),
    });

    if (categories.length !== dto.categoriesIds.length) {
      throw new BadRequestException('One or more category IDs are invalid.');
    }

    const expense = new Expense({
      title: dto.title,
      amount: dto.amount,
      date: dto.date,
      userId: dto.userId,
      categories,
    });
    const created = await this.typeOrmExpenseRepository.save(expense);

    return await this.typeOrmExpenseRepository.findOne({
      where: { id: created.id },
      relations: ['user', 'categories'],
    });
  }

  async createExpenseCategory(
    dto: CreateExpenseCategoryDTO,
  ): Promise<ExpenseCategory> {
    const category = new ExpenseCategory({
      title: dto.title,
    });

    return this.typeOrmExpenseCategoryRepository.save(category);
  }

  async findExpenseCategoryByTitle(title: string): Promise<ExpenseCategory> {
    return this.typeOrmExpenseCategoryRepository.findOne({
      where: { title },
    });
  }
}
