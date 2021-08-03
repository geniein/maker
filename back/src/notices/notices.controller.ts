import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoticesService } from './notices.service';
import { AddNoticesDto } from './dto/add-notices';
import { ApiOperation } from '@nestjs/swagger';
import { Notice } from '../decorators/user.decorator';
import { Notices } from 'src/entities/Notices';

@Controller('api/notices')
export class NoticesController {
  constructor(private readonly noticesService: NoticesService) {}


  @ApiOperation({ summary: '공지사항 리스트 가져오기' })
  @Get()
  async findNotices(@Notice() notices: Notices) {    
    const rtn = await this.noticesService.findNotices();
    // return itemcontent || false;
    return rtn || false;
  }

  @ApiOperation({ summary: '공지사항 가져오기' })
  @Get(':id')
  async findNotice(@Param('id') id: string) {
    const rtn = await this.noticesService.findNotices(id);
    return rtn || false;
  }


  @ApiOperation({ summary: '공지사항 추가' })
  @Post('newPost')
  addNotices(@Body() data: AddNoticesDto) {
    return this.noticesService.addNotice(
      data.category,
      data.title,
      data.content,
      data.author,
      data.srcPath
      );
  }

  @Get()
  findAll() {
    return this.noticesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noticesService.remove(+id);
  }
}
