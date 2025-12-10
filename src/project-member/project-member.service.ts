import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '../prisma/client/client';
import { ProjectMemberRepository } from './project-member.repository';
import { ProjectRepository } from '../project/project.repository';

@Injectable()
export class ProjectMemberService {
  constructor(
    private readonly PMRepo: ProjectMemberRepository,
    private readonly projectRepo: ProjectRepository,
  ) {}
  async create(dataMember: Prisma.ProjectMemberCreateInput, ownerId: number) {
    const projectId = dataMember.project?.connect?.id;
    const memberId = dataMember.user?.connect?.id;
    if (memberId === undefined || projectId === undefined) {
      throw new ForbiddenException('memberId and projectId are required');
    }
    const memberIdNum = Number(memberId);
    const projectIdNum = Number(projectId);
    const projectOwner = await this.projectRepo.getProject(projectIdNum);
    if (!projectOwner) {
      throw new ForbiddenException('project not found');
    }
    const isMember = await this.PMRepo.findMember(memberIdNum, projectIdNum);
    if (isMember) {
      throw new ForbiddenException('user already member');
    }

    if (projectOwner.ownerId !== ownerId) {
      throw new ForbiddenException('not owner');
    }

    return this.PMRepo.addMemberToProject(dataMember);
  }
  async getMemers(projectId: number, memberID: number) {
    const isMember = await this.PMRepo.findMember(memberID, projectId);
    if (!isMember) {
      throw new ForbiddenException('only for users');
    }
    const members = await this.PMRepo.getMemberList(projectId);
    return members.map((member) => member.user.username);
  }
  async removeMember(
    projectId: number,
    memberToRemoveID: number,
    projectOwner: number,
  ) {
    const isMember = await this.PMRepo.findMember(memberToRemoveID, projectId);
    if (!isMember) {
      throw new ForbiddenException('user not found in project');
    }
    const isOwner = await this.projectRepo.getProject(projectId);
    if (!isOwner) {
      throw new ForbiddenException('user is not member in this project');
    }
    if (isOwner.ownerId !== projectOwner) {
      throw new ForbiddenException('user is not owner');
    }
    return this.PMRepo.removeMember(projectId, memberToRemoveID);
  }
}
