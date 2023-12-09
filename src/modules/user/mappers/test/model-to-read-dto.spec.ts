import { buildRandomUser } from 'utils/mocks/entities/user.mock';
import { mapUserToReadUserDTO } from 'modules/user/mappers/model-to-read-dto';
import { ReadUserDTO } from 'modules/user/dtos';

describe('Model To ReadDTO - [User]', () => {
  it('should map User to a ReadDTO', () => {
    const user = buildRandomUser();
    const readDTO = mapUserToReadUserDTO(user);

    expect(readDTO).toBeInstanceOf(ReadUserDTO);
    expect(readDTO).toMatchObject<ReadUserDTO>({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      id: user.id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  });
});
