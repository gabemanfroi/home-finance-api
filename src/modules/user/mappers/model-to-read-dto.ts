import { User } from 'modules/user/user.entity';
import { ReadUserDTO } from 'modules/user/dtos';

export const mapUserToReadUserDTO = (user: User): ReadUserDTO => {
  const { id, firstName, lastName, email, createdAt, updatedAt } = user;
  return new ReadUserDTO({
    id,
    firstName,
    lastName,
    email,
    createdAt,
    updatedAt,
  });
};
