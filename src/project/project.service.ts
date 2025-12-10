import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ProjectRepository } from './project.repository';
import { Prisma } from '../prisma/client/client';
import { ProjectMemberRepository } from '../project-member/project-member.repository';

@Injectable()
export class ProjectService {
  constructor(
    private readonly projectRepo: ProjectRepository,
    private readonly projectMemberRepo: ProjectMemberRepository,
  ) {}

  async createProject(data: Prisma.ProjectCreateInput) {
    const project = await this.projectRepo.createProject(data);
    //юзаю тут репо с другого модуля, хз насколько это красиво, но уже никак
    await this.projectMemberRepo.addMemberToProject({
      project: { connect: { id: project.id } },
      user: { connect: { id: project.ownerId } },
    });

    return project;
  }
  async deleteProject(projectID: number, userId: number) {
    const project = await this.projectRepo.getProject(projectID);
    if (!project) {
      throw new ForbiddenException('Project not found');
    }

    if (project.ownerId === userId) {
      return await this.projectRepo.deleteProject(projectID);
    } else {
      throw new UnauthorizedException('Not the author');
    }
  }
  async updateProjectInfo(
    projectID: number,
    ownerID: number,
    data: Prisma.ProjectUpdateInput,
  ) {
    const ownerId = await this.projectRepo.getProject(projectID);
    if (!ownerId) {
      throw new ForbiddenException('project not found');
    }
    if (ownerId.ownerId !== ownerID) {
      throw new ForbiddenException('you are not a owner of project');
    }
    return await this.projectRepo.updateProject(projectID, data);
  }
}
