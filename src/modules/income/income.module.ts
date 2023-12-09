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

@Module({
  imports: [],
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
export class UserModule {}
