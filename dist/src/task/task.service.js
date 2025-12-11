"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const task_repository_1 = require("./task.repository");
const project_repository_1 = require("../project/project.repository");
let TaskService = class TaskService {
    taskRepo;
    ProjectRepo;
    constructor(taskRepo, ProjectRepo) {
        this.taskRepo = taskRepo;
        this.ProjectRepo = ProjectRepo;
    }
    async create(data) {
        return this.taskRepo.createTask(data);
    }
    async delete(userID, taskID) {
        const task = await this.taskRepo.getTask(taskID);
        if (!task) {
            throw new common_1.NotFoundException('taskID required');
        }
        const projectOwner = await this.ProjectRepo.getProject(task.projectId);
        if (!projectOwner) {
            throw new common_1.NotFoundException('required project id is not parsed from task model');
        }
        const isOwner = projectOwner.ownerId === userID;
        const isAssignee = task.assigneeId === userID;
        if (!isOwner && !isAssignee) {
            throw new common_1.ForbiddenException('You can only delete your own tasks or tasks in your project');
        }
        return this.taskRepo.deleteTask(taskID);
    }
    async updateTask(userID, taskId, data) {
        const task = await this.taskRepo.getTask(taskId);
        if (!task) {
            throw new common_1.NotFoundException('taskID required');
        }
        const projectOwner = await this.ProjectRepo.getProject(task.projectId);
        if (!projectOwner) {
            throw new common_1.NotFoundException('required project id is not parsed from task model');
        }
        const isOwner = projectOwner.ownerId === userID;
        const isAssignee = task.assigneeId === userID;
        if (!isOwner && !isAssignee) {
            throw new common_1.ForbiddenException('You can only delete your own tasks or tasks in your project');
        }
        return this.taskRepo.updateTask(taskId, data);
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository,
        project_repository_1.ProjectRepository])
], TaskService);
//# sourceMappingURL=task.service.js.map