import bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { ItemOrders } from 'src/entities/ItemOrders';
import { SignupRequestDto } from './dto/signup-reqeust.dto';

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

  async findByEmail(email: Object) {
    return this.usersRepository.findOne({
      where: { email },
      select: ['userId', 'email', 'userPassword'],
    });
  }

  async signup(data:SignupRequestDto) {
    const hashedPassword = await bcrypt.hash(data.userPassword, 12);
    const user = await this.usersRepository.findOne({ where: { email: data.email } });
    if (user) {
      return false;
    }
    const returned = await this.usersRepository.save({
      email : data.email,      
      kakaoEmail : data.kakaoEmail,      
      naverEmail : data.naverEmail,      
      userName : data.userName,
      userNickname : data.userNickname,
      userPassword: hashedPassword,
      userId : data.userId,      
      phoneNumber : data.phoneNumber,
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
