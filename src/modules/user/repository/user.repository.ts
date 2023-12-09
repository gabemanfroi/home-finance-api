import { CreateUserDTO } from 'modules/user/dtos/create-user.dto';
import { User } from 'modules/user/user.entity';

export abstract class UserRepository {
  abstract createUser(dto: CreateUserDTO): Promise<User>;
}
