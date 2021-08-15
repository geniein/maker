import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ForbiddenException } from '@nestjs/common';
import { ItemReviewsService } from './item-reviews.service';
import { AddItemReviewDto } from './dto/add-item-review.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedInGuard } from 'src/auth/log-in.guard';
import { User } from 'src/decorators/user.decorator';
import { Users } from 'src/entities/Users';

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
  
  @ApiOperation({ summary: '관련 리뷰 리스트 가져오기' })
  @Get(':contentId')
  async findItemReviewsByCK(@Param('contentId') contentId: string) {
    const result = this.itemReviewsService.findItemReviews(contentId);
    return result || false;
  }

  @ApiOperation({ summary: '리뷰 가져오기' })
  @Get('one/:reviewId')
  async findItemReviewById(@Param('reviewId') reviewId: string) {
    const result = this.itemReviewsService.findItemReviewById(reviewId);
    return result || false;
  } 

  
  @ApiOperation({ summary: '리뷰 추가' })
  @UseGuards(LoggedInGuard)
  @Post('newpost')
  async addItemReview(@User() user: Users, @Body() data: AddItemReviewDto) {
    const result = this.itemReviewsService.addItemReview({
      ...data,
      author:user.userNickname,
      userId:user.userId
    });

    if (result) {
      return 'ok';
    } else {
      throw new ForbiddenException();
    }    
  }
}
