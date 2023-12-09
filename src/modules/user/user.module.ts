import { Module } from '@nestjs/common';
import { UserControllerImplementation } from 'modules/user/controller';
import { UserService, UserServiceImplementation } from 'modules/user/service';
import { UserRepositoryImplementation } from 'modules/user/repository/user.repository.implementation';
import { UserRepository } from 'modules/user/repository/user.repository';

@Module({
  imports: [],
  controllers: [UserControllerImplementation],
  providers: [
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
