import { UserService } from 'modules/user/service/user.service';
import { ReadUserDTO } from 'modules/user/dtos';

export class UserServiceMock implements UserService {
  async createUser(): Promise<ReadUserDTO> {
    return Promise.resolve(new ReadUserDTO());
  }
}
