import { Strategy } from 'passport-kakao';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

const kakaoConfig = {
  clientID: '29481a10b44985b3235049ad6e1a21bc', 
  callbackURL: 'http://localhost:3055/auth/kakao/redirect' 
}

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ clientID: kakaoConfig.clientID, callbackURL: kakaoConfig.callbackURL });
  }

  async validate(accessToken, refreshToken, profile, done) {        
    const profileJson = profile._json;
    const kakao_account = profileJson.kakao_account;    
    let user = await this.authService.validateUserKakao(profileJson.id);

    if(!user){
      const userInfo = {
        email : kakao_account.email,
        kakaoEmail : kakao_account.email,
        kakaoId : profileJson.id,
        userName: kakao_account.profile.nickname,
        userNickname: kakao_account.profile.nickname,
        phoneNumber : kakao_account.profile.phonenumber,
        userId : profileJson.id,
        createdAt : new Date()
      }      
      const signup = await this.authService.signUserKakao(userInfo);
      if(signup){
        user = await this.authService.validateUserKakao(profileJson.id);
      }
    }
    // const payload = {
    //   name: kakao_account.profile.nickname,
    //   kakaoId: profileJson.id,
    //   email: kakao_account.has_email && !kakao_account.email_needs_agreement ? kakao_account.email : null
    // };    
    done(null, user);    
  }
}
