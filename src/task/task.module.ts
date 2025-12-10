import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { TaskRepository } from './task.repository';
import { ProjectRepository } from '../project/project.repository';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository, ProjectRepository],
})
export class TaskModule {}
