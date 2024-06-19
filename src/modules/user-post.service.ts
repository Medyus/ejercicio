import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, catchError, filter, from, map, mergeMap, of, toArray, forkJoin } from 'rxjs';
import { IPost } from '../interfaces/IPosts';
import { IUser } from '../interfaces/IUser';
import axios from 'axios';

@Injectable()
export class UserPostService {
  constructor(private readonly httpService: HttpService) {}

  async getUserAndPost() {
    const users$ = await axios.get('https://jsonplaceholder.typicode.com/users');
    const observableUser = from(users$);

    const posts$ = await axios.get('https://jsonplaceholder.typicode.com/posts');

    return forkJoin({ users: users$, posts: posts$ }).pipe(
      map(({ users, posts }) => {
        return {
          users: users,
          posts: posts,
        };
      })
    );
  }
}
