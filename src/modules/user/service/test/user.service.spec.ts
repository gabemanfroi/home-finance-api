import { UserService, UserServiceImplementation } from 'modules/user/service';
import { buildRandomCreateUserDTO, UserRepositoryMock } from 'utils/mocks';
import { UserRepository } from 'modules/user/repository';
import { Test } from '@nestjs/testing';
import { ReadUserDTO } from 'modules/user/dtos';

describe('Services - [User]', () => {
  let userService: UserService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useClass: UserServiceImplementation,
        },
        {
          provide: UserRepository,
          useClass: UserRepositoryMock,
        },
      ],
    }).compile();

    userRepository = module.get<UserRepository>(UserRepository);
    userService = module.get<UserService>(UserService);
  });

  it('should call the repository to create a User', async () => {
    const randomCreateUserDTO = buildRandomCreateUserDTO();

    jest.spyOn(userRepository, 'createUser');
    await userService.createUser(randomCreateUserDTO);

    expect(userRepository.createUser).toHaveBeenNthCalledWith(
      1,
      randomCreateUserDTO,
    );
  });
  it('should create a User', async () => {
    const randomCreateUserDTO = buildRandomCreateUserDTO();

    const result = await userService.createUser(randomCreateUserDTO);

    expect(result).toBeInstanceOf(ReadUserDTO);
    expect(result).toMatchObject<ReadUserDTO>({
      firstName: randomCreateUserDTO.firstName,
      lastName: randomCreateUserDTO.lastName,
      email: randomCreateUserDTO.email,
      id: expect.any(Number),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });
});
