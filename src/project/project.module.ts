import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { ProjectRepository } from './project.repository';
import { ProjectMemberRepository } from '../project-member/project-member.repository';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectRepository, ProjectMemberRepository],
})
export class ProjectModule {}
