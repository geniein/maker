import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LocalSerializer } from './local.serializer';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { Users } from '../entities/Users';
import { KakaoStrategy } from './kakao.strategy';
import { AuthController } from './auth.controller';
import { NaverStrategy } from './naver.strategy';

@Module({
  imports: [
    PassportModule.register({ session: true }),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers:[AuthController],
  providers: [AuthService, LocalStrategy, LocalSerializer, KakaoStrategy, NaverStrategy]
})
export class AuthModule {}
