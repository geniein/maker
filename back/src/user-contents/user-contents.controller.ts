import { Body, Controller, ForbiddenException, Get, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation } from '@nestjs/swagger';
import { LoggedInGuard } from 'src/auth/log-in.guard';
import { User } from 'src/decorators/user.decorator';
import { Users } from 'src/entities/Users';
import { multerOptions } from 'src/utils/multerOptions';
import { UserContentsService } from './user-contents.service';

@Controller('user-contents')
export class UserContentsController {
  constructor(private readonly userContentsService: UserContentsService) {}

  @Post('')
  async findImgList(@User() user: Users){
    console.log(user);
    return this.userContentsService.findImgList(user.userId);
  }
  // @UseGuards(LoggedInGuard)
  // @Post('addItemCart')
  // async AddItemCart(@User() user: Users,@Body() data: ){
  //   const cartData = {...data,userId:user.userId};
  //   const result = await this.itemCartsService.addItemCart(cartData);    
  //   if(result) {
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  @ApiOperation({ summary: '파일 추가' })
  @UseGuards(LoggedInGuard)
  @UseInterceptors(FileInterceptor('file',multerOptions('')))
  @Post('files')
  async addUserContentFileUpload(@UploadedFile() file: Express.Multer.File) {
    // const itemcontent = this.itemContentsService.findByUk(data.)
    console.log('------------------')
    console.log(file);
    const result = file && `/${file.destination}/${file.originalname}`
    if (result) {
      return result;
    } else {
      throw new ForbiddenException();
    }    
  } 
}
