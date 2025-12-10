import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Priority, Status } from '../../prisma/client/enums';

export class CreateTaskDto {
  @IsString()
  @Length(4, 32)
  title: string;
  @IsString()
  @Length(0, 256)
  description: string;
  @IsEnum(Status)
  @IsOptional()
  status?: Status;
  @IsEnum(Priority)
  @IsOptional()
  priority?: Priority;
  @IsDateString()
  @IsOptional()
  dueData?: string;
}
