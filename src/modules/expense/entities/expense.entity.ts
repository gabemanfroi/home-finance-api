import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'modules/user/user.entity';
import { ExpenseCategory } from 'modules/expense/entities/expense-category.entity';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

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
  categories: ExpenseCategory[];
}
