import { Module } from '@nestjs/common';
import { UserContentsService } from './user-contents.service';
import { UserContentsController } from './user-contents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserContents } from 'src/entities/UserContents';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserContents]),    
  ],
  controllers: [UserContentsController],
  providers: [UserContentsService]
})
export class UserContentsModule {}
