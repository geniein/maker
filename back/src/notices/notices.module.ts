import { Module } from '@nestjs/common';
import { NoticesService } from './notices.service';
import { NoticesController } from './notices.controller';
import { Notices } from 'src/entities/Notices';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notices]),    
  ],
  controllers: [NoticesController],
  providers: [NoticesService]
})
export class NoticesModule {}
