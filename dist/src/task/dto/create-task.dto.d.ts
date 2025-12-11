import { Priority, Status } from '../../prisma/client/enums';
export declare class CreateTaskDto {
    title: string;
    description: string;
    status?: Status;
    priority?: Priority;
    dueData?: string;
}
