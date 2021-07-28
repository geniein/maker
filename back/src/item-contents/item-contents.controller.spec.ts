import { Test, TestingModule } from '@nestjs/testing';
import { ItemContentsController } from './item-contents.controller';
import { ItemContentsService } from './item-contents.service';

describe('ItemContentsController', () => {
  let controller: ItemContentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemContentsController],
      providers: [ItemContentsService],
    }).compile();

    controller = module.get<ItemContentsController>(ItemContentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
