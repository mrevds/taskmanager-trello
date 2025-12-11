import { TaskRepository } from './task.repository';
import { Prisma } from '../prisma/client/client';
import { ProjectRepository } from '../project/project.repository';
export declare class TaskService {
    private readonly taskRepo;
    private readonly ProjectRepo;
    constructor(taskRepo: TaskRepository, ProjectRepo: ProjectRepository);
    create(data: Prisma.TaskCreateInput): Promise<{
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
    }>;
    delete(userID: number, taskID: number): Promise<{
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
    }>;
    updateTask(userID: number, taskId: number, data: Prisma.TaskUpdateInput): Promise<{
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
    }>;
}
