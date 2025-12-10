import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { Prisma } from '../prisma/client/client';
import { ProjectRepository } from '../project/project.repository';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepo: TaskRepository,
    private readonly ProjectRepo: ProjectRepository,
  ) {}

  async create(data: Prisma.TaskCreateInput) {
    return this.taskRepo.createTask(data);
  }

  async delete(userID: number, taskID: number) {
    const task = await this.taskRepo.getTask(taskID);
    if (!task) {
      throw new NotFoundException('taskID required');
    }
    const projectOwner = await this.ProjectRepo.getProject(task.projectId);
    if (!projectOwner) {
      throw new NotFoundException(
        'required project id is not parsed from task model',
      );
    }
    const isOwner = projectOwner.ownerId === userID;
    const isAssignee = task.assigneeId === userID;
    if (!isOwner && !isAssignee) {
      throw new ForbiddenException(
        'You can only delete your own tasks or tasks in your project',
      );
    }
    return this.taskRepo.deleteTask(taskID);
  }

  async updateTask(
    userID: number,
    taskId: number,
    data: Prisma.TaskUpdateInput,
  ) {
    const task = await this.taskRepo.getTask(taskId);
    if (!task) {
      throw new NotFoundException('taskID required');
    }
    const projectOwner = await this.ProjectRepo.getProject(task.projectId);
    if (!projectOwner) {
      throw new NotFoundException(
        'required project id is not parsed from task model',
      );
    }
    const isOwner = projectOwner.ownerId === userID;
    const isAssignee = task.assigneeId === userID;
    if (!isOwner && !isAssignee) {
      throw new ForbiddenException(
        'You can only delete your own tasks or tasks in your project',
      );
    }
    return this.taskRepo.updateTask(taskId, data);
  }
}
