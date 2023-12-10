import { UserService } from 'modules/user/services/user.service';
import { UserRepository } from 'modules/user/repositories/user.repository';
import { CreateUserDTO, ReadUserDTO } from 'modules/user/dtos';
import { Injectable } from '@nestjs/common';
import { mapUserToReadUserDTO } from 'modules/user/mappers';

@Injectable()
export class UserServiceImplementation implements UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: CreateUserDTO): Promise<ReadUserDTO> {
    const user = await this.userRepository.createUser(dto);
    return mapUserToReadUserDTO(user);
  }
}
