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
exports.ProjectMemberService = void 0;
const common_1 = require("@nestjs/common");
const project_member_repository_1 = require("./project-member.repository");
const project_repository_1 = require("../project/project.repository");
let ProjectMemberService = class ProjectMemberService {
    PMRepo;
    projectRepo;
    constructor(PMRepo, projectRepo) {
        this.PMRepo = PMRepo;
        this.projectRepo = projectRepo;
    }
    async create(dataMember, ownerId) {
        const projectId = dataMember.project?.connect?.id;
        const memberId = dataMember.user?.connect?.id;
        if (memberId === undefined || projectId === undefined) {
            throw new common_1.ForbiddenException('memberId and projectId are required');
        }
        const memberIdNum = Number(memberId);
        const projectIdNum = Number(projectId);
        const projectOwner = await this.projectRepo.getProject(projectIdNum);
        if (!projectOwner) {
            throw new common_1.ForbiddenException('project not found');
        }
        const isMember = await this.PMRepo.findMember(memberIdNum, projectIdNum);
        if (isMember) {
            throw new common_1.ForbiddenException('user already member');
        }
        if (projectOwner.ownerId !== ownerId) {
            throw new common_1.ForbiddenException('not owner');
        }
        return this.PMRepo.addMemberToProject(dataMember);
    }
    async getMemers(projectId, memberID) {
        const isMember = await this.PMRepo.findMember(memberID, projectId);
        if (!isMember) {
            throw new common_1.ForbiddenException('only for users');
        }
        const members = await this.PMRepo.getMemberList(projectId);
        return members.map((member) => member.user.username);
    }
    async removeMember(projectId, memberToRemoveID, projectOwner) {
        const isMember = await this.PMRepo.findMember(memberToRemoveID, projectId);
        if (!isMember) {
            throw new common_1.ForbiddenException('user not found in project');
        }
        const isOwner = await this.projectRepo.getProject(projectId);
        if (!isOwner) {
            throw new common_1.ForbiddenException('user is not member in this project');
        }
        if (isOwner.ownerId !== projectOwner) {
            throw new common_1.ForbiddenException('user is not owner');
        }
        return this.PMRepo.removeMember(projectId, memberToRemoveID);
    }
};
exports.ProjectMemberService = ProjectMemberService;
exports.ProjectMemberService = ProjectMemberService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [project_member_repository_1.ProjectMemberRepository,
        project_repository_1.ProjectRepository])
], ProjectMemberService);
//# sourceMappingURL=project-member.service.js.map