import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import typeOrmConfig from '../ormconfig';

import { LoggerMiddleware } from './middlewares/logger.middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ItemContentsModule } from './item-contents/item-contents.module';
import { ItemReviewsModule } from './item-reviews/item-reviews.module';
import { NoticesModule } from './notices/notices.module';
import { ItemCartsModule } from './item-carts/item-carts.module';
import { ItemOrdersModule } from './item-orders/item-orders.module';
import { UserContentsModule } from './user-contents/user-contents.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env']
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    AuthModule,
    ItemContentsModule,
    ItemReviewsModule,
    NoticesModule,
    ItemCartsModule,
    ItemOrdersModule,
    UserContentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer):void{
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
