import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersRepository } from "../users/users.repository";
export declare class AuthService {
    private prisma;
    private jwtService;
    private usersRepo;
    constructor(prisma: PrismaService, jwtService: JwtService, usersRepo: UsersRepository);
    login(dto: CreateUserDto): Promise<{
        access_token: string;
        user: {
            id: number;
            username: string;
            role: import("../prisma/client/enums").Role;
        };
    }>;
    logout(jti: string): Promise<{
        message: string;
    }>;
    isTokenRevoked(jti: string): Promise<boolean>;
}
