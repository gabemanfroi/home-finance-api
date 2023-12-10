import { Column, Entity, ManyToMany, Unique } from 'typeorm';
import { Income } from 'modules/income/entities/income.entity';
import { BaseEntity } from 'modules/shared/entities';

@Entity()
export class IncomeCategory extends BaseEntity {
  @Column()
  @Unique(['title'])
  title: string;

  @ManyToMany(() => Income, (income) => income.categories)
  incomes?: Income[];

  constructor(partial: Partial<IncomeCategory> = {}) {
    super();
    Object.assign(this, partial);
  }
}
