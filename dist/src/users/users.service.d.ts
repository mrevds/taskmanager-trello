import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly usersrepo;
    constructor(usersrepo: UsersRepository);
    register(dto: CreateUserDto): Promise<{
        username: string;
        password: string;
        role: import("../prisma/client/enums").Role;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
