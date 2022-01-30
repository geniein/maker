import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignupRequestDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'test@naver.com',
    description: '아이디',
  })
  public userId: string;

  @IsEmail()
  @ApiProperty({
    example: 'test@naver.com',
    description: '이메일',
  })
  public email: string;

  @IsEmail()
  @ApiProperty({
    example: 'test@naver.com',
    description: '이메일',
  })
  public kakaoEmail: string;

  @IsEmail()
  @ApiProperty({
    example: 'test@naver.com',
    description: '이메일',
  })
  public naverEmail: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Shaco',
    description: '이름',
  })
  public userName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Shaco',
    description: '별명',
  })
  public userNickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1234',
    description: '비밀번호',
  })
  public userPassword: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '01011112222',
    description: '전화번호',
  })
  public phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1:관리자, 2:일반사용자',
    description: '사용자 Level',
  })
  public level: string;
}
