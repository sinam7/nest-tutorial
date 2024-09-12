export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto {
  name: string;
  age: number;
  breed: string;
}

import { IsOptional, IsNumberString } from 'class-validator';

export class ListAllEntities {
  @IsOptional()
  @IsNumberString()
  limit?: string;
}
