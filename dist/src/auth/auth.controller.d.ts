import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authServ;
    constructor(authServ: AuthService);
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            username: string;
            role: import("../prisma/client/enums").Role;
        };
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
}
