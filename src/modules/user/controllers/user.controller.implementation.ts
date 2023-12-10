import { UserController } from 'modules/user/controllers/user.controller';
import { UserService } from 'modules/user/services/user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'modules/user/dtos/create-user.dto';
import { ReadUserDTO } from 'modules/user/dtos';

@Controller('/users')
export class UserControllerImplementation implements UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDTO): Promise<ReadUserDTO> {
    return this.userService.createUser(dto);
  }
}
