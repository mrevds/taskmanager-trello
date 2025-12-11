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
exports.ProjectMemberRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProjectMemberRepository = class ProjectMemberRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    addMemberToProject(dataMember) {
        return this.prisma.projectMember.create({
            data: dataMember,
        });
    }
    findMember(memberId, projectId) {
        return this.prisma.projectMember.findFirst({
            where: {
                projectId: projectId,
                userId: memberId,
            },
        });
    }
    getMemberList(projectId) {
        return this.prisma.projectMember.findMany({
            where: {
                projectId: projectId,
            },
            include: { user: true },
        });
    }
    removeMember(projectId, memberToRemoveId) {
        return this.prisma.projectMember.delete({
            where: {
                projectId_userId: {
                    projectId: projectId,
                    userId: memberToRemoveId,
                },
            },
        });
    }
};
exports.ProjectMemberRepository = ProjectMemberRepository;
exports.ProjectMemberRepository = ProjectMemberRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectMemberRepository);
//# sourceMappingURL=project-member.repository.js.map