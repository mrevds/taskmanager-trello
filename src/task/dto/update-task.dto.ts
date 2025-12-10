import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { Priority, Status } from '../../prisma/client/enums';
import { IsString, Length } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
