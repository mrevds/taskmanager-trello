import {Injectable, UnauthorizedException} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import {CreateUserDto} from "../users/dto/create-user.dto";
import { UsersRepository } from "../users/users.repository";
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private usersRepo: UsersRepository,
  ) {}

  async login(dto: CreateUserDto) {
      const user = await this.usersRepo.findByName(dto.username)
      if (!user) {
          throw new UnauthorizedException('Not found user');
      }
      const isValid = await bcrypt.compare(dto.password, user.password);
      if (!isValid) {
          throw new UnauthorizedException('password is incorrect');
      }

      const jti = uuidv4()
      const payload = {
          sub: user.id,
          username: user.username,
          role: user.role,
          jti: jti,
      };
      const accessToken = this.jwtService.sign(payload);
      return {
          access_token: accessToken,
          user: {
              id: user.id,
              username: user.username,
              role: user.role,
          },
      };
  }

  async logout(jti: string) {
      await this.prisma.revokedToken.create({
          data: {jti},
      });
      return {message: 'Logged out successfully'};
  }
  async isTokenRevoked(jti: string): Promise<boolean> {
      const revoked = await this.prisma.revokedToken.findUnique({
          where: {jti},
      });

      return !!revoked;
  }
}
