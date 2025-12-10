import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { IsString, Length } from 'class-validator';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @IsString()
  @Length(1, 56)
  title?: string;
  @IsString()
  @Length(0, 256)
  description?: string;
}
