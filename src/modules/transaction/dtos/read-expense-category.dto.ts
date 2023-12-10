import { ReadBaseDTO } from 'modules/shared/dtos/read-base.dto';

export class ReadExpenseCategoryDTO extends ReadBaseDTO {
  title: string;

  constructor(partial: Partial<ReadExpenseCategoryDTO> = {}) {
    super();
    Object.assign(this, partial);
  }
}
