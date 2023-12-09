import { UserRepository } from 'modules/user/repository/user.repository';
import { User } from 'modules/user/user.entity';
import { CreateUserDTO } from 'modules/user/dtos';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryImplementation implements UserRepository {
  constructor(
    @Inject('USER_REPOSITORY') private readonly typeOrm: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDTO): Promise<User> {
    const user = new User();
    user.email = dto.email;
    user.firstName = dto.firstName;
    user.lastName = dto.lastName;
    user.password = dto.password;
    return this.typeOrm.save(user);
  }
}
