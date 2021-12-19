import { Test, TestingModule } from '@nestjs/testing';
import { UserContentsService } from './user-contents.service';

describe('UserContentsService', () => {
  let service: UserContentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserContentsService],
    }).compile();

    service = module.get<UserContentsService>(UserContentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
