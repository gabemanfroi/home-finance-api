import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { User } from 'modules/user/user.entity';
import { IncomeCategory } from 'modules/income/entities/income-category.entity';
import { BaseEntity } from 'modules/shared/entities';

@Entity()
export class Income extends BaseEntity {
  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.incomes, { nullable: false })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId?: number;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @ManyToMany(() => IncomeCategory, (incomeCategory) => incomeCategory.incomes)
  @JoinTable()
  categories?: IncomeCategory[];

  constructor(partial: Partial<Income> = {}) {
    super();
    Object.assign(this, partial);
  }
}
