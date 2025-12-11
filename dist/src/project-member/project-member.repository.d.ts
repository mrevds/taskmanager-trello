import { Prisma } from '../prisma/client/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class ProjectMemberRepository {
    private prisma;
    constructor(prisma: PrismaService);
    addMemberToProject(dataMember: Prisma.ProjectMemberCreateInput): Prisma.Prisma__ProjectMemberClient<{
        role: import("../prisma/client/enums").ProjectRole;
        id: number;
        joinedAt: Date;
        projectId: number;
        userId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    findMember(memberId: number, projectId: number): Prisma.Prisma__ProjectMemberClient<{
        role: import("../prisma/client/enums").ProjectRole;
        id: number;
        joinedAt: Date;
        projectId: number;
        userId: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    getMemberList(projectId: number): Prisma.PrismaPromise<({
        user: {
            username: string;
            password: string;
            role: import("../prisma/client/enums").Role;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        role: import("../prisma/client/enums").ProjectRole;
        id: number;
        joinedAt: Date;
        projectId: number;
        userId: number;
    })[]>;
    removeMember(projectId: number, memberToRemoveId: number): Prisma.Prisma__ProjectMemberClient<{
        role: import("../prisma/client/enums").ProjectRole;
        id: number;
        joinedAt: Date;
        projectId: number;
        userId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
}
