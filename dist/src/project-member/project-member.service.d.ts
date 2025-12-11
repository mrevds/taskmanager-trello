import { Prisma } from '../prisma/client/client';
import { ProjectMemberRepository } from './project-member.repository';
import { ProjectRepository } from '../project/project.repository';
export declare class ProjectMemberService {
    private readonly PMRepo;
    private readonly projectRepo;
    constructor(PMRepo: ProjectMemberRepository, projectRepo: ProjectRepository);
    create(dataMember: Prisma.ProjectMemberCreateInput, ownerId: number): Promise<{
        role: import("../prisma/client/enums").ProjectRole;
        id: number;
        joinedAt: Date;
        projectId: number;
        userId: number;
    }>;
    getMemers(projectId: number, memberID: number): Promise<string[]>;
    removeMember(projectId: number, memberToRemoveID: number, projectOwner: number): Promise<{
        role: import("../prisma/client/enums").ProjectRole;
        id: number;
        joinedAt: Date;
        projectId: number;
        userId: number;
    }>;
}
