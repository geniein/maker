import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ForbiddenException } from '@nestjs/common';
import { LoggedInGuard } from 'src/auth/log-in.guard';
import { User } from 'src/decorators/user.decorator';
import { Users } from 'src/entities/Users';
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

  @Get()
  findAll() {
    return this.itemOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemOrdersService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateItemOrderDto: UpdateItemOrderDto) {
  //   return this.itemOrdersService.update(+id, updateItemOrderDto);
  // }
}
