import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ForbiddenException } from '@nestjs/common';
import { ItemReviewsService } from './item-reviews.service';
import { AddItemReviewDto } from './dto/add-item-review.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NotLoggedInGuard } from 'src/auth/not-log-in.guard';

@ApiTags('ITEMREVIEWS')
@Controller('api/item-reviews')
export class ItemReviewsController {
  constructor(private readonly itemReviewsService: ItemReviewsService) {}

  @Post()
  create(@Body() addItemReviewDto: AddItemReviewDto) {
    return false;
  }
  @ApiOperation({ summary: '리뷰 리스트 가져오기' })
  @Get()
  async findItemReviews() {
    const result = this.itemReviewsService.findItemReviews();
    return result || false;
  }
  @ApiOperation({ summary: '리뷰 가져오기' })
  @Get(':id')
  async findItemReview(@Param('id') id: string) {
    const result = this.itemReviewsService.findItemReviews(id);
    return result || false;
  }
  
  @ApiOperation({ summary: '리뷰 추가' })
  @UseGuards(NotLoggedInGuard)
  @Post()
  async addItemReview(@Body() data: AddItemReviewDto) {
    const result = this.itemReviewsService.addItemReview(
      data.contentKey,
      data.category,
      data.title,
      data.hashTag,
      data.content,
      data.author
    );

    if (result) {
      return 'ok';
    } else {
      throw new ForbiddenException();
    }    
  }
}
