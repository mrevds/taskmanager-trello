import {Controller, Post, Body, Request, UseGuards, Delete, Param} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Prisma} from "../prisma/client/client";


@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('new')
  @UseGuards(JwtAuthGuard)
  createProject(@Request() req, @Body() dto: CreateProjectDto)  {
      const userID = req.user.userId;
      const projectData : Prisma.ProjectCreateInput = {
          title: dto.title,
          description: dto.description,
          owner: {
              connect: {id: userID}
          },
      };
      return this.projectService.createProject(projectData);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteProject(@Param('id') id: string, @Request() req){
    const userId = req.user.userId;
    const projectId = parseInt(id);
      return this.projectService.deleteProject(userId,projectId)
  }

}
