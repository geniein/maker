import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export  class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('/kakao')
    @HttpCode(200)
    @UseGuards(AuthGuard('kakao'))
    async kakaoLogin(){
        return HttpStatus.OK;
    }

    @Get('/kakao/redirect')
    @HttpCode(200)
    @UseGuards(AuthGuard('kakao'))
    async kakaoLoginCallback(@Req() req): Promise<{accessToken: string}> {
        console.log(req);
        return {accessToken : 'pass'};
    }

    @Post('/login')
    @HttpCode(200)
    // @UseGuards(AuthGuard('kakao'))
    async userLogin(@Body() data:any){
        console.log(data);        
    }
}