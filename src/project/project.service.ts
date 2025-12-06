import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './project.repository';
import { Prisma } from '../prisma/client/client'

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepo: ProjectRepository) {}

  createProject(data: Prisma.ProjectCreateInput) {
    return this.projectRepo.createProject(data);
  }
}
