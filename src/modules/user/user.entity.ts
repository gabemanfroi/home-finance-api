import { Column, Entity, OneToMany } from 'typeorm';
import { Expense } from 'modules/expense/entities/expense.entity';
import { BaseEntity } from 'modules/shared/entities';

@Entity()
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Expense, (expense) => expense.user)
  expenses: Expense[];

  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
}
