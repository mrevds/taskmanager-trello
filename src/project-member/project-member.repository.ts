import { Injectable } from '@nestjs/common';
import { Prisma } from '../prisma/client/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectMemberRepository {
  constructor(private prisma: PrismaService) {}

  addMemberToProject(dataMember: Prisma.ProjectMemberCreateInput) {
    return this.prisma.projectMember.create({
      data: dataMember,
    });
  }
  findMember(memberId: number, projectId: number) {
    return this.prisma.projectMember.findFirst({
      where: {
        projectId: projectId,
        userId: memberId,
      },
    });
  }
  getMemberList(projectId: number) {
    return this.prisma.projectMember.findMany({
      where: {
        projectId: projectId,
      },
      include: { user: true },
    });
  }
  removeMember(projectId: number, memberToRemoveId: number) {
    return this.prisma.projectMember.delete({
      where: {
        projectId_userId: {
          projectId: projectId,
          userId: memberToRemoveId,
        },
      },
    });
  }
}
