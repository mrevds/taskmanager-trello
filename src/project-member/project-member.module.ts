import { Module } from '@nestjs/common';
import { ProjectMemberService } from './project-member.service';
import { ProjectMemberController } from './project-member.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ProjectMemberRepository } from './project-member.repository';
import { AuthModule } from '../auth/auth.module';
import { ProjectRepository } from '../project/project.repository';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [ProjectMemberController],
  providers: [ProjectMemberService, ProjectMemberRepository, ProjectRepository],
})
export class ProjectMemberModule {}
