import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddItemCartDto {
  @IsString()
  @ApiProperty({
    example: 'ingenie',
    description: '유저ID',
  })
  public userId: string;

  @IsString()
  @ApiProperty({
    example: '전체',
    description: '분류(카테고리)',
  })
  public category: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '[공지]비트코인 떡상',
    description: '제목',
  })
  public title: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '50000',
    description: '가격',
  })
  public price: number;
  
  @IsNumber()
  @ApiProperty({
    example: '50',
    description: '할인률',
  })
  public discount: number;

  @IsString()
  @ApiProperty({
    example: 'Shaco',
    description: '저자',
  })
  public author: string;

  @IsString()
  @ApiProperty({
    example: '/home/',
    description: '썸내일',
  })
  public thumbnail: string;

  @IsNumber()
  @ApiProperty({
    example: '1',
    description: '아이템 수량',
  })
  public itemCount: number;

  @IsString()
  @ApiProperty({
    example: '옵션',
    description: '옵션',
  })
  public options: string;

  @IsString()
  @ApiProperty({
    example: 'uuid',
    description: '아이템 고유ID',
  })
  public contentId: string;
}
