import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../prisma/client/client'

@Injectable()
export class ProjectRepository {
  constructor(private prisma: PrismaService) {}

  createProject(dataProject: Prisma.ProjectCreateInput) {
    return this.prisma.project.create({
        data:  dataProject
    })
  }
  deleteProject(projectID: number) {
      return this.prisma.project.delete({
          where: {
              id: projectID
          },
      })
  }
  getProject(projectID: number) {
      return this.prisma.project.findFirst({
          where: {
              id: projectID
          }
      })
  }
}
