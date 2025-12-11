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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const project_repository_1 = require("./project.repository");
const project_member_repository_1 = require("../project-member/project-member.repository");
let ProjectService = class ProjectService {
    projectRepo;
    projectMemberRepo;
    constructor(projectRepo, projectMemberRepo) {
        this.projectRepo = projectRepo;
        this.projectMemberRepo = projectMemberRepo;
    }
    async createProject(data) {
        const project = await this.projectRepo.createProject(data);
        await this.projectMemberRepo.addMemberToProject({
            project: { connect: { id: project.id } },
            user: { connect: { id: project.ownerId } },
        });
        return project;
    }
    async deleteProject(projectID, userId) {
        const project = await this.projectRepo.getProject(projectID);
        if (!project) {
            throw new common_1.ForbiddenException('Project not found');
        }
        if (project.ownerId === userId) {
            return await this.projectRepo.deleteProject(projectID);
        }
        else {
            throw new common_1.UnauthorizedException('Not the author');
        }
    }
    async updateProjectInfo(projectID, ownerID, data) {
        const ownerId = await this.projectRepo.getProject(projectID);
        if (!ownerId) {
            throw new common_1.ForbiddenException('project not found');
        }
        if (ownerId.ownerId !== ownerID) {
            throw new common_1.ForbiddenException('you are not a owner of project');
        }
        return await this.projectRepo.updateProject(projectID, data);
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [project_repository_1.ProjectRepository,
        project_member_repository_1.ProjectMemberRepository])
], ProjectService);
//# sourceMappingURL=project.service.js.map