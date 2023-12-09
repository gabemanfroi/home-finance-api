import { Module } from '@nestjs/common';
import {
  ExpenseRepository,
  ExpenseRepositoryImplementation,
} from 'modules/expense/repository';
import {
  ExpenseService,
  ExpenseServiceImplementation,
} from 'modules/expense/service';
import { ExpenseControllerImplementation } from 'modules/expense/controller';

@Module({
  imports: [],
  controllers: [ExpenseControllerImplementation],
  providers: [
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
export class ExpenseModule {}
