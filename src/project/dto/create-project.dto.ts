import { IsString, Length } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @Length(1, 56)
  title: string;
  @IsString()
  @Length(0, 256)
  description?: string;
}
