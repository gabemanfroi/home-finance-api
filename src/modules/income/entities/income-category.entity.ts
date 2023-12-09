import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Income } from 'modules/income/entities/income.entity';

@Entity()
export class IncomeCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Income, (income) => income.categories)
  incomes?: Income[];
}
