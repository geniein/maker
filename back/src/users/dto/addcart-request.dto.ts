import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddCartRequestDto {
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
  public userId: string;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'add ContentKey',
    description: '사용자 장바구니',
  })
  public cartList: string;
}
