import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignupRequestDto {
  @IsEmail()
  @ApiProperty({
    example: 'test@naver.com',
    description: '이메일',
  })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Shaco',
    description: '이름',
  })
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1234',
    description: '비밀번호',
  })
  public password: string;
}
