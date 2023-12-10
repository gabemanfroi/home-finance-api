import { Column, Entity, ManyToMany } from 'typeorm';
import { Expense } from 'modules/transaction/entities/expense.entity';
import { BaseEntity } from 'modules/shared/entities';

@Entity()
export class ExpenseCategory extends BaseEntity {
  @Column()
  title: string;

  @ManyToMany(() => Expense, (expense) => expense.categories)
  expenses?: Expense[];

  constructor(partial: Partial<ExpenseCategory> = {}) {
    super();
    Object.assign(this, partial);
  }
}
