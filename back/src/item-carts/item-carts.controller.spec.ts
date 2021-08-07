import { Test, TestingModule } from '@nestjs/testing';
import { ItemCartsController } from './item-carts.controller';
import { ItemCartsService } from './item-carts.service';

describe('ItemCartsController', () => {
  let controller: ItemCartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemCartsController],
      providers: [ItemCartsService],
    }).compile();

    controller = module.get<ItemCartsController>(ItemCartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
