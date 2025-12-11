import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(dto: CreateTaskDto, req: any, projectId: string): Promise<{
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
    deleteTask(taskID: number, req: any): Promise<{
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
    updateTask(taskID: number, req: any, dto: UpdateTaskDto): Promise<{
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
