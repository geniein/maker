import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/Users';
import { AuthService } from './auth.service';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(
    private readonly authService: AuthService,
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {
    super();
  }

  serializeUser(user: Users, done: CallableFunction) {
    // const rtn = user.userId !== undefined ? user.userId: user;
    console.log('serializeUser');    
    done(null, user.id);
  }

  async deserializeUser(id: number, done: CallableFunction) {
    return await this.usersRepository
      .findOneOrFail(
        {
          id: id,
        },
        {
          select: ['id', 'userId', 'userName','userNickname','kakaoId','naverId','level'],
        },
      )
      .then((user) => {        
        done(null, user);
      })
      .catch((error) => done(error));
  }
}
