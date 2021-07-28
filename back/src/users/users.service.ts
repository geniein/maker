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
 
  async findByEmail(email: string) {
    return this.usersRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password'],
    });
  }

  async signup(email: string, name: string, password: string, phoneNumber: string, userId: string) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      return false;
    }
    const returned = await this.usersRepository.save({
      email,
      name,
      password: hashedPassword,
      userId,      
      phoneNumber,
      createdAt: new Date()
    });
    return true;
  }
}
