import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { User } from 'modules/user/user.entity';
import { ExpenseCategory } from 'modules/expense/entities/expense-category.entity';
import { BaseEntity } from 'modules/shared/entities';

@Entity()
export class Expense extends BaseEntity {
  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.expenses)
  user: User;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @ManyToMany(
    () => ExpenseCategory,
    (expenseCategory) => expenseCategory.expenses,
  )
  categories?: ExpenseCategory[];
}
