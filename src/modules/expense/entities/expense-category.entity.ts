import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Expense } from 'modules/expense/entities/expense.entity';

@Entity()
export class ExpenseCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Expense, (expense) => expense.categories)
  expenses?: Expense[];
}
