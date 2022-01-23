import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ForbiddenException, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation } from '@nestjs/swagger';
import { LoggedInGuard } from 'src/auth/log-in.guard';
import { User } from 'src/decorators/user.decorator';
import { Users } from 'src/entities/Users';
import { multerOptions } from 'src/utils/multerOptions';
import { AddItemOrderDto } from './dto/add-item-order.dto';
import { ItemOrdersService } from './item-orders.service';

@Controller('api/item-orders')
export class ItemOrdersController {
  constructor(private readonly itemOrdersService: ItemOrdersService) {}

  @UseGuards(LoggedInGuard)
  @Post()
  async addItemOrder(@User() user: Users, @Body() data: AddItemOrderDto ) {
    const result =  this.itemOrdersService.addItemOrder(user, data);
    if (result) {
      return 'ok';
    } else {
      throw new ForbiddenException();
    }    
    return false;
  }

  @UseGuards(LoggedInGuard)
  @Post('details')
  async getItemOrderDetails(@User() user: Users, @Body() data: AddItemOrderDto ) {
    const result =  this.itemOrdersService.getItemOrderDetail(data.orderId);
    if (result) {
      return result;
    } else {
      throw new ForbiddenException();
    }    
    return false;
  }

  @Get()
  findAll() {
    return this.itemOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemOrdersService.findOne(+id);
  }

  @ApiOperation({ summary: '사용자 이미지 파일 추가' })
  @UseGuards(LoggedInGuard)
  @UseInterceptors(FileInterceptor('file',multerOptions('uploads')))
  @Post('files')
  async addItemOrderImageUpload(@UploadedFile() file: Express.Multer.File, @Body() data: AddItemOrderDto) {
    // const itemcontent = this.itemContentsService.findByUk(data.)
    const addDetail = await this.itemOrdersService.addItemOrderDetail(data.orderId, file.destination, file.originalname)      
    const result = await this.itemOrdersService.getItemOrderDetail(data.orderId);
    // const result = file && `/${file.destination}/${file.originalname}`

    if (result) {
      return addDetail;
    } else {
      throw new ForbiddenException();
    }    
  }

  @ApiOperation({ summary: '사용자 이미지 파일 삭제' })
  @UseGuards(LoggedInGuard)  
  @Delete('files')
  async removeItemOrderImageUpload(@UploadedFile() file: Express.Multer.File, @Body() data: AddItemOrderDto) {
    // const itemcontent = this.itemContentsService.findByUk(data.)    
    const result = this.itemOrdersService.removeItemOrderDetail(data.orderId, data.fileIdx);
    // const result = file && `/${file.destination}/${file.originalname}`

    if (result) {
      return result;
    } else {
      throw new ForbiddenException();
    }    
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateItemOrderDto: UpdateItemOrderDto) {
  //   return this.itemOrdersService.update(+id, updateItemOrderDto);
  // }
}
