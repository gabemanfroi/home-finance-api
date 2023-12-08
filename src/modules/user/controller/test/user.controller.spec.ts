import { UserServiceMock } from './utils';
import { UserService } from 'modules/user/service';
import {
  UserController,
  UserControllerImplementation,
} from 'modules/user/controller/';
import { CreateUserDTO, ReadUserDTO } from 'modules/user/dtos';

describe('Controllers - [User]', () => {
  let userController: UserController;
  let userService: UserService;
  beforeEach(() => {
    userService = new UserServiceMock();
    userController = new UserControllerImplementation(userService);
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

    expect(userService.createUser).toHaveBeenCalledWith(user);
    expect(response).toBeInstanceOf(ReadUserDTO)
  })
});
