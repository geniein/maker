import { Module } from '@nestjs/common';
import { ItemContentsService } from './item-contents.service';
import { ItemContentsController } from './item-contents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemContents } from 'src/entities/ItemContents';
import { ItemContent } from 'src/decorators/user.decorator';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemContents]),
  ],
  controllers: [ItemContentsController],
  providers: [ItemContentsService],
  exports: [ItemContentsService]
})
export class ItemContentsModule {}
