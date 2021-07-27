import bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';

@Injectable()
export class UsersService {
  constructor(
  @InjectRepository(Users) private usersRepository: Repository<Users>,
  ){}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findByEmail(email: string) {
    return this.usersRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password'],
    });
  }

  async signup(email: string, name: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      return false;
    }
    const returned = await this.usersRepository.save({
      email,
      name,
      password: hashedPassword,
      createdAt: new Date()
    });
    return true;
  }
}
