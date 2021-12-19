import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class AddItemReviewDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'A#21sdq',
    description: '컨텐츠 Id',
  })
  public contentId: string;

  @IsString()
  @ApiProperty({
    example: 'A#21sdq',
    description: '주문 Id',
  })
  public orderId: string;

  @IsString()
  @ApiProperty({
    example: 'test@naver.com',
    description: '작성자ID',
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
}
