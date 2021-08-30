import { Test, TestingModule } from '@nestjs/testing';
import { UserContentsController } from './user-contents.controller';
import { UserContentsService } from './user-contents.service';

describe('UserContentsController', () => {
  let controller: UserContentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserContentsController],
      providers: [UserContentsService],
    }).compile();

    controller = module.get<UserContentsController>(UserContentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
