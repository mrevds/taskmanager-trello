"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectMemberModule = void 0;
const common_1 = require("@nestjs/common");
const project_member_service_1 = require("./project-member.service");
const project_member_controller_1 = require("./project-member.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const project_member_repository_1 = require("./project-member.repository");
const auth_module_1 = require("../auth/auth.module");
const project_repository_1 = require("../project/project.repository");
let ProjectMemberModule = class ProjectMemberModule {
};
exports.ProjectMemberModule = ProjectMemberModule;
exports.ProjectMemberModule = ProjectMemberModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, prisma_module_1.PrismaModule],
        controllers: [project_member_controller_1.ProjectMemberController],
        providers: [project_member_service_1.ProjectMemberService, project_member_repository_1.ProjectMemberRepository, project_repository_1.ProjectRepository],
    })
], ProjectMemberModule);
//# sourceMappingURL=project-member.module.js.map