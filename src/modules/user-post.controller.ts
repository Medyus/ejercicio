import { Controller, Get } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/IPosts';

@Controller('api')
export class UserPostController {
  constructor(private readonly userPostService: UserPostService) {}

  @Get('user-posts')
  getFilterPost(): Observable<IPost[]> {
    return this.userPostService.getUserPost();
  }
}
