import bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { ItemOrders } from 'src/entities/ItemOrders';

@Injectable()
export class UsersService {
  constructor(
  @InjectRepository(Users) private usersRepository: Repository<Users>,  
  @InjectRepository(ItemOrders) private itemordersRepository: Repository<ItemOrders>,
  ){}
 
  async findById(userId: string) {
    return this.usersRepository.findOne({
      where: { userId },
      select: ['userId', 'email', 'userPassword'],
    });
  }

  async signup(userId: string, email: string, userName: string, userNickname: string, password: string, phoneNumber: string) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      return false;
    }
    const returned = await this.usersRepository.save({
      email,      
      userName,
      userNickname,
      userPassword: hashedPassword,
      userId,      
      phoneNumber,
      createdAt: new Date()
    });
    return true;
  }

  async addCart(email:string, userName:string, cart:string){
    const cartList = this.usersRepository.findOne({
      where: { email },
      select: ['cartList'],
    });
    const cartCount = (await cartList).cartList.split(',').length;
    console.log(`cartCount : ${cartCount}`);
    if(cartCount > 10){
      return false;
    }
  }

  async findMycontentsById(user: Users) {
    const ResultMyContents = await this.usersRepository.findOne({
      where: { userId : user.userId },      
      relations: ['myContents']
    });
    const queryOpt = ResultMyContents.myContents.map((val,idx)=>{
      return {          
        contentId: val.contentId
      }
    })

    if(ResultMyContents.myContents.length> 0){
      const orderResult = await this.itemordersRepository.find({
        where : queryOpt,
        relations: ['contentInfo']
      })
      const result = orderResult.map((val, idx)=>{
        val.contentInfo
        return {...val.contentInfo, orderId:val.orderId, reviewStatus: val.reviewStatus, contentStatus: val.contentStatus};
      })
      return result;      
    }
    //console.log(ResultMyContents);
    return false;    
  }
}
