import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemOrders } from 'src/entities/ItemOrders';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { AddItemOrderDto } from './dto/add-item-order.dto';
import dayjs from 'dayjs';
import { randomNumber } from 'src/utils/utils';
import { ItemCarts } from 'src/entities/ItemCarts';
import { ItemOrderDetails } from 'src/entities/ItemOrderDetails';
import fs from 'fs';

@Injectable()
export class ItemOrdersService {

  constructor(
    @InjectRepository(ItemOrders) private itemordersRepository: Repository<ItemOrders>,
    @InjectRepository(ItemOrderDetails) private itemorderdetailsRepository: Repository<ItemOrderDetails>,
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

  async addItemOrderDetail (orderId: string, filePath : string, fileName: string) { 
    const getFileIdx = await this.getMaxFileIdxByOrderId(orderId);
    const result = await this.itemorderdetailsRepository.save({
      orderId,
      filePath,
      fileName,
      fileIdx : getFileIdx + 1
    })
      
    return getFileIdx + 1;
  }  

  async removeItemOrderDetail (orderId: string, fileIdx: number) {
    const getFileInfo = await this.getItemOrderDetail(orderId, fileIdx);

    if(getFileInfo){
      getFileInfo.map((val)=>{
        fs.unlink(`${val.filePath}${val.fileName}`, (err)=>console.log(err));
        // fs.rm(`${val.filePath}${val.fileName}`,(err)=>console.log(err));
      })
    }
    const result = await this.itemorderdetailsRepository.delete({orderId,fileIdx});
      
    return result;
  }

  async getItemOrderDetail (orderId: string, fileIdx?:number) {            
    const result = fileIdx === undefined ? await this.itemorderdetailsRepository.find({orderId}) : await this.itemorderdetailsRepository.find({orderId,fileIdx})
      
    return result;
  }
  
  async getMaxFileIdxByOrderId (orderId: string) {        
    const query = `select MAX(fileIdx) as MAXID from itemorderdetails where orderIdOrderId = ?`;
    const result = await this.itemorderdetailsRepository.query(query,[orderId]);
    let maxId = result[0].MAXID;
    maxId === null ? 1 : maxId;
    
    return maxId;
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
