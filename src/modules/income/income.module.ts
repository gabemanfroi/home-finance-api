import { Module } from '@nestjs/common';
import { IncomeControllerImplementation } from 'modules/income/controller';
import {
  IncomeService,
  IncomeServiceImplementation,
} from 'modules/income/service';
import {
  IncomeRepository,
  IncomeRepositoryImplementation,
} from 'modules/income/repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income, IncomeCategory } from 'modules/income/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Income, IncomeCategory])],
  controllers: [IncomeControllerImplementation],
  providers: [
    {
      provide: IncomeService,
      useClass: IncomeServiceImplementation,
    },
    {
      provide: IncomeRepository,
      useClass: IncomeRepositoryImplementation,
    },
  ],
})
export class IncomeModule {}
