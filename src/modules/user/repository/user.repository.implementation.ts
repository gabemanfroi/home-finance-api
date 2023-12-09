import { UserRepository } from 'modules/user/repository/user.repository';
import { User } from 'modules/user/user.entity';
import { CreateUserDTO } from 'modules/user/dtos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryImplementation implements UserRepository {
  async createUser(dto: CreateUserDTO): Promise<User> {
    console.log(dto);
    return {} as User;
  }
}
