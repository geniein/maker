import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, Req, Res, UseGuards} from '@nestjs/common';
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
    async kakaoLoginCallback(@Req() req, @Query() access_code, @Res()res):Promise<any> {
        console.log(access_code);                
        const token = access_code['code'];
        res.redirect(`http://localhost:3030/`);        
        // const res = await this.kakaoService.getToken(token, this.client_id, this.redirect_uri)
        // const userinfo = await this.kakaoService.getUserInfo(res.access_token);
        // this.access_token = res.access_token;
        // console.log(userinfo['access_token']);
        // return userinfo;
        // return {accessToken : token};
        // return {accessToken : 'pass'};
    }
}