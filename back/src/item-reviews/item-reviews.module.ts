import { Module } from '@nestjs/common';
import { ItemReviewsService } from './item-reviews.service';
import { ItemReviewsController } from './item-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemReviews } from 'src/entities/ItemReviews';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemReviews]),
  ],
  controllers: [ItemReviewsController],
  providers: [ItemReviewsService]  
})
export class ItemReviewsModule {}
