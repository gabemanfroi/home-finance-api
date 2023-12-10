import { Module } from '@nestjs/common';
import { UserControllerImplementation } from 'modules/user/controllers';
import { UserService, UserServiceImplementation } from 'modules/user/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  UserRepository,
  UserRepositoryImplementation,
} from 'modules/user/repositories';
import { User } from 'modules/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
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
