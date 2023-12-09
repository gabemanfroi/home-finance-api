import { User } from 'modules/user/user.entity';
import {
  randEmail,
  randFirstName,
  randLastName,
  randNumber,
  randPassword,
  randPastDate,
} from '@ngneat/falso';
import { CreateUserDTO } from 'modules/user/dtos';

export const buildRandomUser = (): User => {
  return new User({
    firstName: randFirstName(),
    lastName: randLastName(),
    email: randEmail(),
    updatedAt: randPastDate(),
    createdAt: randPastDate(),
    password: randPassword(),
    id: randNumber({ fraction: 0 }),
  });
};

export const buildUserFromCreateDTO = (dto: CreateUserDTO): User => {
  return new User({
    firstName: dto.firstName,
    lastName: dto.lastName,
    email: dto.email,
    password: dto.password,
    createdAt: randPastDate(),
    updatedAt: randPastDate(),
    id: randNumber({ fraction: 0 }),
  });
};
