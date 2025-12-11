import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(req: any, dto: CreateProjectDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        ownerId: number;
    }>;
    deleteProject(id: string, req: any): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        ownerId: number;
    }>;
    updateProject(projectId: string, req: any, dto: UpdateProjectDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string | null;
        ownerId: number;
    }>;
}
