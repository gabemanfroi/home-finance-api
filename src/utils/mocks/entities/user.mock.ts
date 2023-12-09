import { User } from 'modules/user/user.entity';
import {
  randEmail,
  randFirstName,
  randLastName,
  randNumber,
  randPassword,
  randPastDate,
} from '@ngneat/falso';

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
