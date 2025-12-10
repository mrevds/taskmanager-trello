import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../prisma/client/client';

@Injectable()
export class TaskRepository {
  constructor(private prisma: PrismaService) {}

  createTask(dataTask: Prisma.TaskCreateInput) {
    return this.prisma.task.create({
      data: dataTask,
    });
  }

  deleteTask(taskId: number) {
    return this.prisma.task.delete({
      where: {
        id: taskId,
      },
    });
  }

  getTask(taskId: number) {
    return this.prisma.task.findFirst({
      where: {
        id: taskId,
      },
    });
  }
  updateTask(taskId: number, data: Prisma.TaskUpdateInput) {
    return this.prisma.task.update({
      where: { id: taskId },
      data,
    });
  }
}
