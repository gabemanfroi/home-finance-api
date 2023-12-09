import { UserRepository } from 'modules/user/repository/user.repository';
import { User } from 'modules/user/user.entity';
import { CreateUserDTO } from 'modules/user/dtos';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepositoryImplementation implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly typeOrmUserRepository: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDTO): Promise<User> {
    const user = new User({
      password: dto.password,
      email: dto.email,
      firstName: dto.firstName,
      lastName: dto.lastName,
    });
    return this.typeOrmUserRepository.save(user);
  }
}
