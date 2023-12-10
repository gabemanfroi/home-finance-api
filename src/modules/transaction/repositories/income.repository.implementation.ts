import { IncomeRepository } from 'modules/transaction/repositories';
import { Income } from 'modules/transaction/entities/income.entity';
import {
  CreateIncomeCategoryDTO,
  CreateIncomeDTO,
} from 'modules/transaction/dtos';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IncomeCategory } from 'modules/transaction/entities';
import { BadRequestException } from '@nestjs/common';

export class IncomeRepositoryImplementation implements IncomeRepository {
  constructor(
    @InjectRepository(Income)
    private readonly typeOrmIncomeRepository: Repository<Income>,
    @InjectRepository(IncomeCategory)
    private readonly typeOrmIncomeCategoryRepository: Repository<IncomeCategory>,
  ) {}

  async createIncome(dto: CreateIncomeDTO): Promise<Income> {
    const categories = await this.typeOrmIncomeCategoryRepository.findBy({
      id: In(dto.categoriesIds),
    });

    if (categories.length !== dto.categoriesIds.length) {
      throw new BadRequestException('One or more category IDs are invalid.');
    }

    const income = new Income({
      title: dto.title,
      amount: dto.amount,
      date: dto.date,
      userId: dto.userId,
      categories,
    });
    const created = await this.typeOrmIncomeRepository.save(income);

    return await this.typeOrmIncomeRepository.findOne({
      where: { id: created.id },
      relations: ['user', 'categories'],
    });
  }

  async createIncomeCategory(
    dto: CreateIncomeCategoryDTO,
  ): Promise<IncomeCategory> {
    const category = new IncomeCategory({
      title: dto.title,
    });

    return this.typeOrmIncomeCategoryRepository.save(category);
  }

  async findIncomeCategoryByTitle(name: string): Promise<IncomeCategory> {
    return this.typeOrmIncomeCategoryRepository.findOne({
      where: { title: name },
    });
  }
}
