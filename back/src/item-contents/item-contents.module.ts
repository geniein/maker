import { Module } from '@nestjs/common';
import { ItemContentsService } from './item-contents.service';
import { ItemContentsController } from './item-contents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemContents } from 'src/entities/ItemContents';
import { ItemContent } from 'src/decorators/user.decorator';
import { MulterModule } from '@nestjs/platform-express';
import multer from 'multer';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemContents]),    
  ],
  controllers: [ItemContentsController],
  providers: [ItemContentsService],  
})

export class ItemContentsModule {}
