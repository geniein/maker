import { Test, TestingModule } from '@nestjs/testing';
import { ItemContentsService } from './item-contents.service';

describe('ItemContentsService', () => {
  let service: ItemContentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemContentsService],
    }).compile();

    service = module.get<ItemContentsService>(ItemContentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
