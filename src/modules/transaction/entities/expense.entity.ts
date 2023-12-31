import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { User } from 'modules/user/user.entity';
import { ExpenseCategory } from 'modules/transaction/entities/expense-category.entity';
import { BaseEntity } from 'modules/shared/entities';

@Entity()
export class Expense extends BaseEntity {
  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.expenses, { nullable: false })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId?: number;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @ManyToMany(
    () => ExpenseCategory,
    (expenseCategory) => expenseCategory.expenses,
  )
  @JoinTable()
  categories?: ExpenseCategory[];

  constructor(partial: Partial<Expense> = {}) {
    super();
    Object.assign(this, partial);
  }
}
