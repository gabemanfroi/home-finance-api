import { Module } from '@nestjs/common';
import { UserControllerImplementation } from 'modules/user/controller';
import { UserService, UserServiceImplementation } from 'modules/user/service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  UserRepository,
  UserRepositoryImplementation,
} from 'modules/user/repository';
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
