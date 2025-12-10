import {
  Controller,
  Request,
  Post,
  Body,
  Param,
  UseGuards,
  Delete,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Prisma } from '../prisma/client/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post(':projectId')
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() dto: CreateTaskDto,
    @Request() req,
    @Param('projectId') projectId: string,
  ) {
    const userId = req.user.userId;
    const projectIdNum = parseInt(projectId);
    const data: Prisma.TaskCreateInput = {
      title: dto.title,
      description: dto.description,
      status: 'TODO',
      priority: dto.priority ?? 'MEDIUM',
      assignee: {
        connect: { id: userId },
      },
      project: {
        connect: { id: projectIdNum },
      },
      dueData: dto.dueData,
    };
    return this.taskService.create(data);
  }

  @Delete(':taskID')
  @UseGuards(JwtAuthGuard)
  async deleteTask(@Param('taskId') taskID: number, @Request() req) {
    const userID = req.user.userId;
    return this.taskService.delete(userID, taskID);
  }
  @Put(':taskid')
  @UseGuards(JwtAuthGuard)
  async updateTask(
    @Param('taskid') taskID: number,
    @Request() req,
    @Body() dto: UpdateTaskDto,
  ) {
    return this.taskService.updateTask(Number(req.user.userId), Number(taskID), dto);
  }
}
