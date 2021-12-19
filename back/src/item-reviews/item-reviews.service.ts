import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemReviews } from 'src/entities/ItemReviews';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { CreateItemReviewDto } from './dto/create-item-review.dto';
import { AddItemReviewDto } from './dto/add-item-review.dto';

@Injectable()
export class ItemReviewsService {
  constructor(
    @InjectRepository(ItemReviews) private itemreviewsRepository: Repository<ItemReviews>,
  ){}
  async findItemReviews(contendId?:string){    
    const result = contendId === undefined ?
      await this.itemreviewsRepository.find() :
      await this.itemreviewsRepository.find({where:{contentId:contendId}}); 
    // const result =await this.itemcontentsRepository.find({where:{id:id}});
    return result;
  }

  async findItemReviewById(reviewId:string){    
    const result = await this.itemreviewsRepository.findOne({where:{reviewId:reviewId}}); 
    // const result =await this.itemcontentsRepository.find({where:{id:id}});
    return result;
  }

  async addItemReview(data:AddItemReviewDto){    
    const result = await this.itemreviewsRepository.save({
      contentId:data.contentId,
      category:data.category,
      title:data.title,      
      content:data.content,
      author:data.author,
      userId:data.userId
    })
    return result;    
  }
}
