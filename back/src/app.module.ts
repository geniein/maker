import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as ormconfig from './ormconfig';

import { LoggerMiddleware } from './middlewares/logger.middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env']
    }),
    TypeOrmModule.forRoot(ormconfig),
    UsersModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer):void{
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
