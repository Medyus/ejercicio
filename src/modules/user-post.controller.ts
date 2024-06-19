import { Controller, Get } from '@nestjs/common';
import { UserPostService } from './user-post.service';

@Controller('user-posts')
export class UserPostController {
  constructor(private readonly userPostService: UserPostService) {}

  @Get()
  getFilterPost() {
    return this.userPostService.getUserAndPost();
  }
}
