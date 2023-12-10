import { ReadBaseDTO } from 'modules/shared/dtos/read-base.dto';

export class ReadIncomeCategoryDTO extends ReadBaseDTO {
  title: string;

  constructor(partial: Partial<ReadIncomeCategoryDTO> = {}) {
    super();
    Object.assign(this, partial);
  }
}
