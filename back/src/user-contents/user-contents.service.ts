import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserContents } from 'src/entities/UserContents';
import { Repository } from 'typeorm';

@Injectable()
export class UserContentsService {

    constructor(
        @InjectRepository(UserContents) private usercontentsRepository: Repository<UserContents>,
    ){}

    async findImgList(userId:string) {
        return await this.usercontentsRepository.find({
            where: {userId:userId}
        });
    }
}
