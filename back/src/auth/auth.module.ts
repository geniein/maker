import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LocalSerializer } from './local.serializer';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { Users } from '../entities/Users';

@Module({
  imports: [
    PassportModule.register({ session: true }),
    TypeOrmModule.forFeature([Users]),
  ],
  providers: [AuthService, LocalStrategy, LocalSerializer]
})
export class AuthModule {}