import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): import("../prisma/client/models").Prisma__UserClient<{
        username: string;
        password: string;
        role: import("../prisma/client/enums").Role;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../prisma/client/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findByName(username: string): import("../prisma/client/models").Prisma__UserClient<{
        username: string;
        password: string;
        role: import("../prisma/client/enums").Role;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../prisma/client/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
