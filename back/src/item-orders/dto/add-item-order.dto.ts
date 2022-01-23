import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, isNumber, IsNumber, IsString } from 'class-validator';


export class AddItemOrderDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: '202108150112ORDER00001',
        description: '주문번호',
    })
    public orderId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: '202108150112PAY00001',
        description: '결제번호',
    })
    public paymentId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'Shaco',
        description: '구매자ID',
    })
    public userId: string;

    @IsString()    
    @ApiProperty({
        example: 'Y',
        description: '결제상태',
    })
    public paymentStatus: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'AWs1231',
        description: '컨텐츠 ID',
    })
    public contentId: string;

    @IsNumber()    
    @ApiProperty({
        example: '50000',
        description: '가격',
    })
    public price: number;

    @IsNumber()    
    @ApiProperty({
        example: '1',
        description: '아이템 갯수',
    })
    public itemCount: number;

    @IsString()    
    @ApiProperty({
        example: '0 : 안함, 1: 신청',
        description: 'DVD 서비스',
    })
    public dvdService: string;

    @IsString()    
    @ApiProperty({
        example: '0 : 안함, 1: 신청',
        description: 'USB 서비스',
    })
    public usbService: string;

    @IsNumber()
    @ApiProperty({
        example: '0',
        description: '파일 idx',
    })
    public fileIdx: number;    
}
