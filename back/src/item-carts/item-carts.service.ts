import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemCarts } from 'src/entities/ItemCarts';
import { AddItemCartDto } from './dto/add-item-carts.dto';

@Injectable()
export class ItemCartsService {
  constructor(
    @InjectRepository(ItemCarts) private itemcartsRepository: Repository<ItemCarts>,
  ){}

  findAll() {
    return `This action returns all itemCarts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemCart`;
  }

  async removeCart(id: number) {
    return await this.itemcartsRepository.delete({
      id,
      userId:'ingenie'
    })
  }

  async findCartList(userId:string) {
    return await this.itemcartsRepository.find({
      where: {userId:userId}
    });
  }

  async addItemCart(data : AddItemCartDto) {
    const {userId,contentId, category, title, price, discount, thumbnail, itemCount, options} = data;
    const cartList = await this.itemcartsRepository.find({
      where: {userId}      
    }) ?? [];  
    if(cartList.length>10){
      return false;
    } else {
      let chkCount = false;
      cartList.forEach((val)=>{
        if(val.contentId === contentId){          
          this.itemcartsRepository.save({
            ...val,
            itemCount: Number(val.itemCount) + itemCount            
          });
          chkCount = true;
        }
      })
      if(chkCount){
        return true;
      }
      //return false;
      return await this.itemcartsRepository.save({        
        ...data
        // userId,
        // contentId,
        // category,
        // title,
        // price,
        // discount,
        // thumbnail,
        // itemCount,
        // options
      });
    }
  }
}
