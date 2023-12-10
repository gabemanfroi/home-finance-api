import { Module } from '@nestjs/common';
import {
  ExpenseRepository,
  ExpenseRepositoryImplementation,
} from 'modules/transaction/repositories';
import {
  ExpenseService,
  ExpenseServiceImplementation,
} from 'modules/transaction/services';
import {
  ExpenseControllerImplementation,
  IncomeControllerImplementation,
} from 'modules/transaction/controllers';

@Module({
  imports: [],
  controllers: [
    ExpenseControllerImplementation,
    IncomeControllerImplementation,
  ],
  providers: [
    {
      provide: ExpenseService,
      useClass: ExpenseServiceImplementation,
    },
    {
      provide: ExpenseRepository,
      useClass: ExpenseRepositoryImplementation,
    },
    {
      provide: ExpenseService,
      useClass: ExpenseServiceImplementation,
    },
    {
      provide: ExpenseRepository,
      useClass: ExpenseRepositoryImplementation,
    },
  ],
})
export class TransactionModule {}
