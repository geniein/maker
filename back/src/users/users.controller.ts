import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, ForbiddenException, Response, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignupRequestDto } from './dto/SignupReqeustDto';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';
import { User } from '../decorators/user.decorator';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@ApiTags('USERS')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async signup(@Body() data: SignupRequestDto) {
    console.log(data);
    const user = this.usersService.findByEmail(data.email);
    if (!user) {
      throw new NotFoundException();
    }
    const result = await this.usersService.signup(
      data.email,
      data.name,
      data.password,
    );
    if (result) {
      return 'ok';
    } else {
      throw new ForbiddenException();
    }
  }

  @ApiCookieAuth('connect.sid')
  @ApiOperation({ summary: '내 정보 가져오기' })
  @Get()
  async getProfile(@User() user: Users) {
    return user || false;
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
  // @UseGuards(LoggedInGuard)
  @Post('logout')
  async logout(@Response() res) {
    res.clearCookie('connect.sid', { httpOnly: true });
    return res.send('ok');
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
