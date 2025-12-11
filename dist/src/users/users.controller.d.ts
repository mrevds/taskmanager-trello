import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    signUp(dto: CreateUserDto): Promise<{
        username: string;
        password: string;
        role: import("../prisma/client/enums").Role;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
