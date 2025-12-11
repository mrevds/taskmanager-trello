import { ProjectRepository } from './project.repository';
import { Prisma } from '../prisma/client/client';
import { ProjectMemberRepository } from '../project-member/project-member.repository';
export declare class ProjectService {
    private readonly projectRepo;
    private readonly projectMemberRepo;
    constructor(projectRepo: ProjectRepository, projectMemberRepo: ProjectMemberRepository);
    createProject(data: Prisma.ProjectCreateInput): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        ownerId: number;
    }>;
    deleteProject(projectID: number, userId: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        ownerId: number;
    }>;
    updateProjectInfo(projectID: number, ownerID: number, data: Prisma.ProjectUpdateInput): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        ownerId: number;
    }>;
}
