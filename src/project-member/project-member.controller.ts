import {
    Controller,
    Post,
    Body,
    Param,
    Request,
    UseGuards,
    Get,
    Delete, UnauthorizedException,
} from '@nestjs/common';
import { ProjectMemberService } from './project-member.service';
import { CreateProjectMemberDto } from './dto/create-project-member.dto';
import { Prisma } from '../prisma/client/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('project-member')
export class ProjectMemberController {
  constructor(private readonly projectMemberService: ProjectMemberService) {}
  @UseGuards(JwtAuthGuard)
  @Post(':projectId')
  create(
    @Body() dto: CreateProjectMemberDto,
    @Request() req,
    @Param('projectId') projectId: string,
  ) {
    const ProjectID = parseInt(projectId);
    let ownerId = req.user.userId;
    if (ownerId === undefined) {
      throw new UnauthorizedException('ownerID is required');
    } else {
      ownerId = Number(ownerId);
    }

    const data: Prisma.ProjectMemberCreateInput = {
      user: {
        connect: { id: dto.userId },
      },
      project: {
        connect: { id: ProjectID },
      },
    };

    return this.projectMemberService.create(data, Number(ownerId));
  }

  @UseGuards(JwtAuthGuard)
  @Get(':ProjectId')
  getMembers(@Param('ProjectId') projectId: string, @Request() req) {
    const projectID = parseInt(projectId);
    const userID = req.user.userId;
    return this.projectMemberService.getMemers(projectID, userID);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':ProjectId')
  deleteMember(
    @Param('ProjectId') projectId: string,
    @Request() req,
    @Body() id: number,
  ) {
    const projectID = parseInt(projectId);
    const userID = req;
    return this.projectMemberService.removeMember(projectID, id, userID);
  }
}
