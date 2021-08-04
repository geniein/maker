import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemReviews } from 'src/entities/ItemReviews';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { CreateItemReviewDto } from './dto/create-item-review.dto';

@Injectable()
export class ItemReviewsService {
  constructor(
    @InjectRepository(ItemReviews) private itemreviewsRepository: Repository<ItemReviews>,
  ){}
  async findItemReviews(ck?){    
    const result = ck === undefined ?
      await this.itemreviewsRepository.find() :
      await this.itemreviewsRepository.find({where:{contentKey:ck}}); 
    // const result =await this.itemcontentsRepository.find({where:{id:id}});
    return result;
  }

  async addItemReview(contentKey: string, category:string, title:string, hashTag:string, content:string, author:string ){
    const plain = author + new Date().getTime().toString();
    const uk = await bcrypt.hash(plain, 12);
    const result = await this.itemreviewsRepository.save({
      contentKey,
      category,
      title,      
      content,
      author
    })
    return result;    
  }
}
