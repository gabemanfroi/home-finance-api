import { ReadBaseDTO } from 'modules/shared/dtos/read-base.dto';

export class ReadUserDTO extends ReadBaseDTO {
  firstName: string;
  lastName: string;
  email: string;
}
