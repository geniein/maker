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
}
