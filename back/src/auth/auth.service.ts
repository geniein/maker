import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { Users } from '../entities/Users';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>,
    ) {}
    async validateUser(userId: string, userPassword: string) {
        const user = await this.usersRepository.findOne({
          where: { userId },
          select: ['id', 'userId', 'email', 'userPassword'],
        });
        console.log(userId, userPassword, user);
        if (!user) {
          return null;
        }
        const result = await bcrypt.compare(userPassword, user.userPassword);
        if (result) {
          const { userPassword, ...userWithoutPassword } = user;
          return userWithoutPassword;
        }
        return null;
    }

    async validateUserKakao (kakaoId: string) {
      const user = await this.usersRepository.findOne({
        where: { kakaoId },
        select: ['id', 'userId', 'email', 'userPassword'],
      });
      console.log(kakaoId, user);
      if (!user) {
        return null;
      }      
      return user;
  }
//import { SignupRequestDto } from './dto/signup-reqeust.dto';
  async signUserKakao (data: any) {
    const hashedPassword = await bcrypt.hash('@!sdwaw02123', 12);    
    const returned = await this.usersRepository.save({
      email : data.email,      
      kakaoEmail : data.kakaoEmail,
      kakaoId: data.kakaoId,      
      naverEmail : data.naverEmail,            
      naverId: data.naverId,
      userName : data.userName,
      userNickname : data.userNickname,
      userPassword: hashedPassword,
      userId : data.userId,      
      createdAt: new Date()
    });
    return true;
}
}
