import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException, UseGuards } from '@nestjs/common';
import { response } from 'express';
import { LoggedInGuard } from 'src/auth/log-in.guard';
import { User } from 'src/decorators/user.decorator';
import { Users } from 'src/entities/Users';
import { AddItemCartDto } from './dto/add-item-carts.dto';
import { ItemCartsService } from './item-carts.service';

@Controller('/api/item-carts')
export class ItemCartsController {
  constructor(private readonly itemCartsService: ItemCartsService) {}

  @Get('')
  async findCartList(@User() user: Users){
    return this.itemCartsService.findCartList(user.userId);
  }
  @UseGuards(LoggedInGuard)
  @Post('addItemCart')
  async AddItemCart(@User() user: Users,@Body() data: AddItemCartDto){
    const cartData = {...data,userId:user.userId};
    const result = await this.itemCartsService.addItemCart(cartData);    
    if(result) {
      return true;
    }else{
      //return 'exceed quantity of items'
      return false;
      //throw new ForbiddenException();
    }
  }

  @Delete('remove/:contentId')
  remove(@User() user: Users, @Param('contentId') contentId: string) {
    return this.itemCartsService.removeCart(contentId,user.userId);
  }
}
