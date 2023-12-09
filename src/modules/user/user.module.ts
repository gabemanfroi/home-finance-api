import { Module } from '@nestjs/common';
import { UserControllerImplementation } from 'modules/user/controller';
import { UserService, UserServiceImplementation } from 'modules/user/service';
import { UserRepositoryImplementation } from 'modules/user/repository/user.repository.implementation';
import { UserRepository } from 'modules/user/repository/user.repository';
import { userProviders } from 'modules/user/providers/user.providers';
import { DataBaseModule } from 'core/db/db.module';

@Module({
  imports: [DataBaseModule],
  controllers: [UserControllerImplementation],
  providers: [
    ...userProviders,
    {
      provide: UserService,
      useClass: UserServiceImplementation,
    },
    {
      provide: UserRepository,
      useClass: UserRepositoryImplementation,
    },
  ],
})
export class UserModule {}
