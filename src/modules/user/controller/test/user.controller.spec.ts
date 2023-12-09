import { UserService } from 'modules/user/service';
import {
  UserController,
  UserControllerImplementation,
} from 'modules/user/controller/';
import { CreateUserDTO, ReadUserDTO } from 'modules/user/dtos';
import { Test } from '@nestjs/testing';
import { UserServiceMock } from 'utils/mocks';

describe('Controllers - [User]', () => {
  let userController: UserController;
  let userService: UserService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UserControllerImplementation],
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock,
        },
      ],
    }).compile();

    userController = module.get<UserControllerImplementation>(
      UserControllerImplementation,
    );
    userService = module.get<UserService>(UserService);
  });

  it('should create a user', async () => {
    const user: CreateUserDTO = {
      firstName: 'FirstName',
      lastName: 'LastName',
      email: 'e@mail.com',
      password: 'password',
      confirmPassword: 'password',
    };

    jest.spyOn(userService, 'createUser').mockImplementation(async () => {
      return Promise.resolve(new ReadUserDTO());
    });

    const response = await userController.createUser(user);

    expect(userService.createUser).toHaveBeenNthCalledWith(1, user);
    expect(response).toBeInstanceOf(ReadUserDTO);
  });
});
