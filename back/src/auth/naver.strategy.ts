import { Strategy } from 'passport-naver';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

const naverConfig = {
  clientID: 'i6eIuWbc40m_KNpI2myQ',
  clientSecret: 'GSQA_p26Gw', 
  callbackURL: 'http://localhost:3055/oauth/naver/redirect' 
}

@Injectable()
export class NaverStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ clientID: naverConfig.clientID, clientSecret: naverConfig.clientSecret, callbackURL: naverConfig.callbackURL });
  }

  async validate(accessToken, refreshToken, profile, done) {
    console.log('------naver------');
    console.log('------naver------',accessToken);
    const prefix = 'NAVER#'    
    const profileJson = profile._json;
    const naverId = prefix+profileJson.id
    const naver_account = profileJson.naver_account;    
    let user = await this.authService.validateUserNaver(naverId);

    if(!user){
      const userInfo = {
        email : naver_account.email,
        naverEmail : naver_account.email,
        naverId,
        userName: naver_account.profile.nickname,
        userNickname: naver_account.profile.nickname,
        phoneNumber : naver_account.profile.phonenumber,
        userId : naverId,
        createdAt : new Date()
      }      
      const signup = await this.authService.signupUserSNS(userInfo);
      if(signup){
        user = await this.authService.validateUserNaver(naverId);
      }
    }    
    done(null, user);    
  }
}
