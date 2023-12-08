import { UserRepository } from 'modules/user/repository/user.repository';
import { User } from 'modules/user/user.model';
import { CreateUserDTO } from 'modules/user/dtos';

export class UserRepositoryImplementation implements UserRepository {
  async createUser(dto: CreateUserDTO): Promise<User> {
    console.log(dto);
    return {} as User;
  }
}