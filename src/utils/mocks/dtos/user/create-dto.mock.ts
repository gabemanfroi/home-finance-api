import { CreateUserDTO } from 'modules/user/dtos';
import {
  randEmail,
  randFirstName,
  randLastName,
  randPassword,
} from '@ngneat/falso';

export const buildRandomCreateUserDTO = (
  partial: Partial<CreateUserDTO> = {},
): CreateUserDTO => {
  const password = randPassword();
  const dto: CreateUserDTO = {
    firstName: randFirstName(),
    email: randEmail(),
    lastName: randLastName(),
    confirmPassword: password,
    password,
    ...partial,
  };

  return Object.assign(new CreateUserDTO(), dto);
};
