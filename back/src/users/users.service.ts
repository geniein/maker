import bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';

@Injectable()
export class UsersService {
  constructor(
  @InjectRepository(Users) private usersRepository: Repository<Users>,
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
    }else{      
    }

  }
}
