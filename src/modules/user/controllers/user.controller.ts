import { CreateUserDTO } from 'modules/user/dtos/create-user.dto';
import { ReadUserDTO } from 'modules/user/dtos';

export abstract class UserController {
  abstract createUser(dto: CreateUserDTO): Promise<ReadUserDTO>;
}
