import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { ItemContents } from 'src/entities/ItemContents';
import { Repository } from 'typeorm';
import { UpdateItemContentDto } from './dto/update-item-content.dto';

@Injectable()
export class ItemContentsService {
  constructor(
    @InjectRepository(ItemContents) private itemcontentsRepository: Repository<ItemContents>,
  ){}

  findAll() {
    return `This action returns all itemContents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemContent`;
  }

  update(id: number, updateItemContentDto: UpdateItemContentDto) {
    return `This action updates a #${id} itemContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemContent`;
  }

  async addItemContent(category:string, title:string, price:number, hashTag:string, content:string, author:string, srcPath:string, thumbnail:string){
    const plain = author + new Date().getTime().toString();
    const uk = await bcrypt.hash(plain, 12);
    const result = await this.itemcontentsRepository.save({
      uk,
      category,
      title,
      price,
      hashTag,
      content,
      author,
      srcPath,
      thumbnail      
    });
    return result;    
  }
}