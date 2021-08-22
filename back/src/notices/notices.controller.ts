import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoticesService } from './notices.service';
import { AddNoticesDto } from './dto/add-notices';
import { ApiOperation } from '@nestjs/swagger';
import { Notice, User } from '../decorators/user.decorator';
import { Notices } from 'src/entities/Notices';
import { Users } from 'src/entities/Users';

@Controller('api/notices')
export class NoticesController {
  constructor(private readonly noticesService: NoticesService) {}


  @ApiOperation({ summary: '공지사항 리스트 가져오기' })
  @Get(':category')
  async findNotices(@Param('category') category: string) {    
    const rtn = await this.noticesService.findNotices(category);
    // return itemcontent || false;
    return rtn || false;
  }

  @ApiOperation({ summary: '공지사항 가져오기' })
  @Get(':category/:id')
  async findNotice(@Param('category') category: string, @Param('id') id: string) {
    const rtn = await this.noticesService.findNotices(category,id);
    return rtn || false;
  }


  @ApiOperation({ summary: '공지사항 추가' })
  @Post('newpost')
  addNotices(@User() user: Users,@Body() data: AddNoticesDto) {
    return this.noticesService.addNotice(
      data.category,
      data.title,
      data.content,       
      data.srcPath,
      user.userNickname,
      data.thumbnail
      );
  }

  @ApiOperation({ summary: '이벤트 리스트 가져오기' })
  @Get('event')
  async findEvents(@Notice() notices: Notices) {    
    const rtn = await this.noticesService.findEvents();
    // return itemcontent || false;
    return rtn || false;
  }

  @ApiOperation({ summary: '이벤트 가져오기' })
  @Get('event/:id')
  async findEvent(@Param('id') id: string) {
    const rtn = await this.noticesService.findEvents(id);
    return rtn || false;
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
