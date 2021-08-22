import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notices } from 'src/entities/Notices';
import { Repository } from 'typeorm';
import { AddNoticesDto } from './dto/add-notices';

@Injectable()
export class NoticesService {

  constructor(
    @InjectRepository(Notices) private noticesRepository: Repository<Notices>,
  ){}   

    async findNotices(category, id?){
      const result = id === undefined ?
      await this.noticesRepository.find({where:{category:category.toUpperCase()}}) :
      await this.noticesRepository.find({where:{id:id, category:category.toUpperCase()}});      
    // const result =await this.itemcontentsRepository.find({where:{id:id}});
    return result;
    }

    async findEvents(id?){
      const result = id === undefined ?
      await this.noticesRepository.find({where:{category:"EVENT"}}) :
      await this.noticesRepository.find({where:{id:id,category:"EVENT"}});      
    // const result =await this.itemcontentsRepository.find({where:{id:id}});
    return result;
    }

  async addNotice(category:string, title: string, content: string,srcPath: string, author: string, thumbnail:string) {
    const result = await this.noticesRepository.save({      
      category,
      title,      
      content,
      author,
      srcPath,
      thumbnail
    });
    return result;
  }

  findAll() {
    return `This action returns all notices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notice`;
  }

  remove(id: number) {
    return `This action removes a #${id} notice`;
  }
}
