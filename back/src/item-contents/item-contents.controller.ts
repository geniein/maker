import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException, UseGuards } from '@nestjs/common';
import { ItemContentsService } from './item-contents.service';
import { UpdateItemContentDto } from './dto/update-item-content.dto';
import { AddItemContentDto } from './dto/add-item-content.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ItemContent } from '../decorators/user.decorator';
import { ItemContents } from '../entities/ItemContents';
import { NotLoggedInGuard } from 'src/auth/not-log-in.guard';

@ApiTags('ITEMCONTENTS')
@Controller('api/item-contents')
export class ItemContentsController {
  constructor(private readonly itemContentsService: ItemContentsService) {}

  @ApiOperation({ summary: '컨텐츠 리스트 가져오기' })
  @Get()
  async getItemContents(@ItemContent() itemcontent: ItemContents) {
    return itemcontent || false;
  }

  @ApiOperation({ summary: '컨텐츠 가져오기' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.itemContentsService.findOne(+id);
  }

  @ApiOperation({ summary: '컨텐츠 추가' })
  @UseGuards(NotLoggedInGuard)
  @Post()
  async addItemContent(@Body() data: AddItemContentDto) {
    // const itemcontent = this.itemContentsService.findByUk(data.)

    const result = await this.itemContentsService.addItemContent(
      data.category,
      data.title,
      data.price,
      data.hashTag,
      data.content,
      data.author,
      data.srcPath,
      data.thumbnail
    );

    if (result) {
      return 'ok';
    } else {
      throw new ForbiddenException();
    }

    return false;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemContentsService.remove(+id);
  }
}
