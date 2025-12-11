import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../prisma/client/client';
export declare class ProjectRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createProject(dataProject: Prisma.ProjectCreateInput): Prisma.Prisma__ProjectClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        ownerId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    deleteProject(projectID: number): Prisma.Prisma__ProjectClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        ownerId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    getProject(projectID: number): Prisma.Prisma__ProjectClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        ownerId: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    updateProject(projectID: number, dataProject: Prisma.ProjectUpdateInput): Prisma.Prisma__ProjectClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        ownerId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
}
