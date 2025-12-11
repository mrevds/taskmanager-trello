import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../prisma/client/client';
export declare class TaskRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createTask(dataTask: Prisma.TaskCreateInput): Prisma.Prisma__TaskClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        projectId: number;
        status: import("../prisma/client/enums").Status;
        priority: import("../prisma/client/enums").Priority;
        dueData: Date | null;
        assigneeId: number | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    deleteTask(taskId: number): Prisma.Prisma__TaskClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        projectId: number;
        status: import("../prisma/client/enums").Status;
        priority: import("../prisma/client/enums").Priority;
        dueData: Date | null;
        assigneeId: number | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    getTask(taskId: number): Prisma.Prisma__TaskClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        projectId: number;
        status: import("../prisma/client/enums").Status;
        priority: import("../prisma/client/enums").Priority;
        dueData: Date | null;
        assigneeId: number | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    updateTask(taskId: number, data: Prisma.TaskUpdateInput): Prisma.Prisma__TaskClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        projectId: number;
        status: import("../prisma/client/enums").Status;
        priority: import("../prisma/client/enums").Priority;
        dueData: Date | null;
        assigneeId: number | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
}
