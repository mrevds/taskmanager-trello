import {Body, Controller, Post, UseGuards, Request} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginDto} from "./dto/login.dto";
import {JwtAuthGuard} from "./jwt-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authServ: AuthService) {}

    @Post('signin')
    async login(@Body()dto:LoginDto){
        return this.authServ.login(dto)
    }

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    async logout(@Request() req){
        return this.authServ.logout(req.user.jti)
    }
}
