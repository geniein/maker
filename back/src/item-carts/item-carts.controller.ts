import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException } from '@nestjs/common';
import { response } from 'express';
import { AddItemCartDto } from './dto/add-item-carts.dto';
import { ItemCartsService } from './item-carts.service';

@Controller('/api/item-carts')
export class ItemCartsController {
  constructor(private readonly itemCartsService: ItemCartsService) {}

  @Get(':id')
  async findCartList(@Param('id') userId: string){
    return this.itemCartsService.findCartList(userId);
  }

  @Post('addItemCart')
  async AddItemCart(@Body() data: AddItemCartDto){
    const result = await this.itemCartsService.addItemCart(data);    
    if(result) {
      return result;
    }else{
      return 'exceed quantity of items'
      //throw new ForbiddenException();
    }
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.itemCartsService.removeCart(+id);
  }
}
