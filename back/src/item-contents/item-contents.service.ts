import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { ItemContents } from 'src/entities/ItemContents';
import uuidRandom from 'src/utils/uuidRandom';
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

  update(id: number, updateItemContentDto: UpdateItemContentDto) {
    return `This action updates a #${id} itemContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemContent`;
  }
  async findItemContents(id?){    
    const result = id === undefined ?
      await this.itemcontentsRepository.find() :
      await this.itemcontentsRepository.find({where:{contentId:id}}); 
    // const result =await this.itemcontentsRepository.find({where:{id:id}});
    return result;
  }

  async findItemContentsByCode(code:string, cate?:string){    
    const result = cate === undefined ?
      await this.itemcontentsRepository.find({where:{contentCode:code,}}) :
      await this.itemcontentsRepository.find({where:{contentCode:code, category:cate}});     
    return result;
  }

  async addItemContent(contentCode: string, category:string, title:string, price:number, hashTag:string, content:string, author:string, srcPath:string, thumbnail:string, discount:number){    
    //const uk = uuidRandom();
    const result = await this.itemcontentsRepository.save({
      //uk,
      contentCode,
      category,
      title,
      price,
      hashTag,
      content,
      author,
      srcPath,
      thumbnail,
      discount      
    });
    return result;    
  }
}
