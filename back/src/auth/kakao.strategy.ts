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
    console.log(accessToken)
    console.log(profile)
    const profileJson = profile._json;
    const kakao_account = profileJson.kakao_account;
    const payload = {
      name: kakao_account.profile.nickname,
      kakaoId: profileJson.id,
      email: kakao_account.has_email && !kakao_account.email_needs_agreement ? kakao_account.email : null
    };
    done(null, payload);
  }
}
