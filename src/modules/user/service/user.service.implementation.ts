import { UserService } from 'modules/user/service/user.service';
import { UserRepository } from 'modules/user/repository/user.repository';
import { CreateUserDTO, ReadUserDTO } from 'modules/user/dtos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServiceImplementation implements UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: CreateUserDTO): Promise<ReadUserDTO> {
    const user = await this.userRepository.createUser(dto);
    console.log({ user });
    return {} as ReadUserDTO;
  }
}
