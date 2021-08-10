import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class AddItemContentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'adver:광고, letter:편지, invite:초대',
    description: '컨텐츠 코드',
  })
  public contentCode: string;

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
    example: '#Awesome Service',
    description: '#',
  })
  public hashTag: string;

  @IsString()
  @ApiProperty({
    example: 'textarea',
    description: '내용',
  })
  public content: string;

  @IsString()
  @ApiProperty({
    example: 'Shaco',
    description: '저자',
  })
  public author: string;

  @IsString()
  @ApiProperty({
    example: '/home/',
    description: 'Resource Path',
  })
  public srcPath: string;

  @IsString()
  @ApiProperty({
    example: '/home/',
    description: '썸내일',
  })
  public thumbnail: string;
}
