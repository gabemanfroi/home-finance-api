import {
  UserRepository,
  UserRepositoryImplementation,
} from 'modules/user/repositories';
import { Test } from '@nestjs/testing';
import { buildRandomCreateUserDTO } from 'utils/mocks';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmServiceMock } from 'utils/mocks/services/typeorm.service.mock';
import { User } from 'modules/user/user.entity';
import { Connection } from 'typeorm';

describe('Repositories - User', () => {
  let userRepository: UserRepository;
  let typeOrm: Connection;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useClass: TypeOrmServiceMock,
        }),
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env.test',
        }),
        TypeOrmModule.forFeature([User]),
      ],
      providers: [
        {
          provide: UserRepository,
          useClass: UserRepositoryImplementation,
        },
      ],
    }).compile();

    userRepository = module.get<UserRepository>(UserRepository);
    typeOrm = module.get<Connection>(Connection);
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const result = await userRepository.createUser(
        buildRandomCreateUserDTO(),
      );

      expect(result).toBeInstanceOf(User);
    });
  });
});
