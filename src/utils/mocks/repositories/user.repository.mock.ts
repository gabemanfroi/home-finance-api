import { UserRepository } from 'modules/user/repositories';
import { User } from 'modules/user';
import { CreateUserDTO } from 'modules/user/dtos';
import { buildUserFromCreateDTO } from 'utils/mocks/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryMock implements UserRepository {
  constructor() {}

  async createUser(dto: CreateUserDTO): Promise<User> {
    return buildUserFromCreateDTO(dto);
  }
}
