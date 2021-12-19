import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemOrders } from 'src/entities/ItemOrders';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { AddItemOrderDto } from './dto/add-item-order.dto';
import dayjs from 'dayjs';
import { randomNumber } from 'src/utils/utils';
import { ItemCarts } from 'src/entities/ItemCarts';

@Injectable()
export class ItemOrdersService {

  constructor(
    @InjectRepository(ItemOrders) private itemordersRepository: Repository<ItemOrders>,
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @InjectRepository(ItemCarts) private itemcartsRepository: Repository<ItemCarts>,
  ){}

  async addItemOrder (user:Users, addItemOrderDto: AddItemOrderDto) {
    const userInfo = await this.usersRepository.findOne({
      where: {userId:user.userId}      
    });
    const dateTime = dayjs(new Date()).format('YYYYMMDDHHmm');
    const sid = randomNumber(5);
    if(userInfo){
      const orderResult = await this.itemordersRepository.save({
        orderId: `${dateTime}ORDER${sid}`,
        paymentId: `${dateTime}PAY${sid}`,
        userId: userInfo.userId,      
        paymentStatus: 'Y',
        contentId: addItemOrderDto.contentId,
        price: addItemOrderDto.price,
        dvdService: addItemOrderDto.dvdService,
        usbService: addItemOrderDto.usbService      
      })      
      const deleteCart = await this.itemcartsRepository.delete({
        userId:userInfo.userId,
        contentId:addItemOrderDto.contentId
      })
      return true;
    }

    return false;
  }

  findAll() {
    return `This action returns all itemOrders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemOrder`;
  }

  // update(id: number, updateItemOrderDto: UpdateItemOrderDto) {
  //   return `This action updates a #${id} itemOrder`;
  // }
}
