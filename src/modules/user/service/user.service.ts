import { CreateUserDTO, ReadUserDTO } from 'modules/user/dtos';

export abstract class UserService {
  abstract createUser(dto: CreateUserDTO): Promise<ReadUserDTO>;
}
