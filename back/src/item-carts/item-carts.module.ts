import { Module } from '@nestjs/common';
import { ItemCartsService } from './item-carts.service';
import { ItemCartsController } from './item-carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemCarts } from 'src/entities/ItemCarts';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemCarts]),    
  ],
  controllers: [ItemCartsController],
  providers: [ItemCartsService]
})
export class ItemCartsModule {}
