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
    async validateUser(email: string, password: string) {
        const user = await this.usersRepository.findOne({
          where: { email },
          select: ['id', 'email', 'userPassword'],
        });
        console.log(email, password, user);
        if (!user) {
          return null;
        }
        const result = await bcrypt.compare(password, user.userPassword);
        if (result) {
          const { userPassword, ...userWithoutPassword } = user;
          return userWithoutPassword;
        }
        return null;
    }
}
