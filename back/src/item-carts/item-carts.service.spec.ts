import { Test, TestingModule } from '@nestjs/testing';
import { ItemCartsService } from './item-carts.service';

describe('ItemCartsService', () => {
  let service: ItemCartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemCartsService],
    }).compile();

    service = module.get<ItemCartsService>(ItemCartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
