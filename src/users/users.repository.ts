import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        username: dto.username,
        password: dto.password,
      },
    });
  }
  findByName(username: string) {
    return this.prisma.user.findFirst({
      where: { username },
    });
  }
}
