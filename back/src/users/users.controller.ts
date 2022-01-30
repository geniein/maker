import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, ForbiddenException, Response, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignupRequestDto } from './dto/signup-reqeust.dto';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';
import { User } from '../decorators/user.decorator';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { LoggedInGuard } from 'src/auth/log-in.guard';
import { NotLoggedInGuard } from 'src/auth/not-log-in.guard';

@ApiTags('USERS')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCookieAuth('connect.sid')
  @ApiOperation({ summary: '내 정보 가져오기' })
  @Get()
  async getUser(@User() user: Users) {    
    return user || false;
  }

  @ApiOperation({summary: '회원가입'})
  @UseGuards(NotLoggedInGuard)
  @Post()
  async signup(@Body() data: SignupRequestDto) {
    console.log(data);
    const user = this.usersService.findById(data.email);
    if (!user) {
      throw new NotFoundException();
    }
    const result = await this.usersService.signup(data);
    if (result) {
      return 'ok';
    } else {
      throw new ForbiddenException();
    }
  }

  // @ApiCookieAuth('connect.sid')
  // @ApiOperation({ summary: '내 정보 가져오기 by ID' })
  // @Get(':id')
  // async getProfile(@Param('id') id: string) {    
  //   const result = await this.usersService.findById(id);
  //   if (result) {
  //     return true;
  //   }else {
  //     return false;
  //   }   
  // }
  
  @ApiOperation({ summary: '아이디 중복 체크' })
  @Get('duple/:id')
  async chkDupleId(@Param('id') id: string) {    
    const result = await this.usersService.findById(id);
    if (result) {
      return true;
    }else {
      return false;
    }   
  }

  @ApiOperation({ summary: '로그인 타입별 email 확인' })  
  @Post('logintype')
  async chkLoginType(@Body() data: SignupRequestDto) {    
    const result = await this.usersService.findByEmail(data);
    if (result) {
      return true;
    }else {
      return false;
    }   
  }
  
  @ApiOperation({ summary: '내 영상/사진 가져오기' })
  @UseGuards(LoggedInGuard)
  @Post('mycontents')
  async getMyContents(@User() user: Users) {
    const result = await this.usersService.findMycontentsById(user);    
    if (result) {
      return result;
    }else {
      return false;
    }          
  }

  @ApiOperation({ summary: 'SNS 로그인' })  
  @Post('loginsns')
  async loginsms(@Body() data: SignupRequestDto) {
    const result = await this.usersService.findByEmail(data);
    console.log('SNS Log In');
    console.log(result);
    const userData: Users = new Users();
    userData.userId = result.userId;
    userData.userPassword = result.userPassword;
    const user = this.login(userData);
    return user;
  }
  
  @ApiOperation({ summary: '로그인' })
  @UseGuards(LocalAuthGuard)  
  @Post('login')
  async login(@User() user: Users) {
    console.log('Log In');
    return user;
  }

  @ApiCookieAuth('connect.sid')
  @ApiOperation({ summary: '로그아웃' })
  @UseGuards(LoggedInGuard)
  @Post('logout')
  async logout(@Response() res) {
    res.clearCookie('connect.sid', { httpOnly: true });
    return res.send('ok');
  }   
}
