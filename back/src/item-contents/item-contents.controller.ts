import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ItemContentsService } from './item-contents.service';
import { UpdateItemContentDto } from './dto/update-item-content.dto';
import { AddItemContentDto } from './dto/add-item-content.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ItemContent } from '../decorators/user.decorator';
import { ItemContents } from '../entities/ItemContents';
import { NotLoggedInGuard } from 'src/auth/not-log-in.guard';
import { LoggedInGuard } from 'src/auth/log-in.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/utils/multerOptions';

@ApiTags('ITEMCONTENTS')
@Controller('api/item-contents')
export class ItemContentsController {
  constructor(private readonly itemContentsService: ItemContentsService) {}

  @ApiOperation({ summary: '컨텐츠 리스트 가져오기' })
  @Get()
  async findItemContents(@ItemContent() itemcontent: ItemContents) {    
    const rtn = await this.itemContentsService.findItemContents();
    // return itemcontent || false;
    return rtn || false;
  }

  @ApiOperation({ summary: '컨텐츠 리스트 가져오기' })
  @Get('/list/:code/:cate')
  async findItemContentsByCode(@Param('code') code: string, @Param('cate') cate: string) { 
    if(cate === 'ALL') cate =undefined;
    const rtn = await this.itemContentsService.findItemContentsByCode(code, cate);
    // return itemcontent || false;
    return rtn || false;
  }

  @ApiOperation({ summary: '컨텐츠 가져오기' })
  @Get('/one/:id')
  async findItemContent(@Param('id') id: string) {
    const rtn = await this.itemContentsService.findItemContents(id);
    return rtn || false;
  }

  @ApiOperation({ summary: '컨텐츠 추가' })
  @UseGuards(LoggedInGuard)  
  @Post('newpost')
  async addItemContent(@Body() data: AddItemContentDto) {
    // const itemcontent = this.itemContentsService.findByUk(data.)

    const result = await this.itemContentsService.addItemContent(
      data.contentCode,
      data.category,
      data.title,
      data.price,
      data.hashTag,
      data.content,
      data.author,
      data.srcPath,
      data.thumbnail,
      data.discount
    );

    if (result) {
      return 'ok';
    } else {
      throw new ForbiddenException();
    }

    return false;
  }

  @ApiOperation({ summary: '파일 추가' })
  @UseGuards(LoggedInGuard)
  @UseInterceptors(FileInterceptor('file',multerOptions))
  @Post('files')
  async addItemContentFileUpload(@UploadedFile() file: Express.Multer.File) {
    // const itemcontent = this.itemContentsService.findByUk(data.)
    const result = file && `/${file.destination}/${file.originalname}`
    if (result) {
      return result;
    } else {
      throw new ForbiddenException();
    }    
  }  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemContentsService.remove(+id);
  }
}
