import { IsInt } from 'class-validator';

export class CreateProjectMemberDto {
  @IsInt()
  userId: number;
}
