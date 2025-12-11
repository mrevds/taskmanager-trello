import { ProjectMemberService } from './project-member.service';
import { CreateProjectMemberDto } from './dto/create-project-member.dto';
export declare class ProjectMemberController {
    private readonly projectMemberService;
    constructor(projectMemberService: ProjectMemberService);
    create(dto: CreateProjectMemberDto, req: any, projectId: string): Promise<{
        role: import("../prisma/client/enums").ProjectRole;
        id: number;
        joinedAt: Date;
        projectId: number;
        userId: number;
    }>;
    getMembers(projectId: string, req: any): Promise<string[]>;
    deleteMember(projectId: string, req: any, id: number): Promise<{
        role: import("../prisma/client/enums").ProjectRole;
        id: number;
        joinedAt: Date;
        projectId: number;
        userId: number;
    }>;
}
