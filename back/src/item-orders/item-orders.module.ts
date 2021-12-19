import { Module } from '@nestjs/common';
import { ItemOrdersService } from './item-orders.service';
import { ItemOrdersController } from './item-orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemOrders } from 'src/entities/ItemOrders';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/entities/Users';
import { ItemCarts } from 'src/entities/ItemCarts';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemOrders,Users,ItemCarts]),    
  ],
  controllers: [ItemOrdersController],
  providers: [ItemOrdersService]
})
export class ItemOrdersModule {}
