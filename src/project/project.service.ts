import {Injectable, UnauthorizedException} from '@nestjs/common';
import { ProjectRepository } from './project.repository';
import { Prisma } from '../prisma/client/client'

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepo: ProjectRepository) {}

  createProject(data: Prisma.ProjectCreateInput) {
    return this.projectRepo.createProject(data);
  }
  async deleteProject(projectID : number, userId : number) {
      const project =  await this.projectRepo.getProject(projectID)
      if (!project) {
          throw new UnauthorizedException('Project not found');
      }

      if (project.ownerId === userId) {
          return this.projectRepo.deleteProject(projectID);
      } else {
          throw new UnauthorizedException('Not the author')
      }
  }
}
