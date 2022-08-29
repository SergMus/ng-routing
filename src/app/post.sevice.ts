import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  id: number;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [
    { title: 'title 1', text: 'some random text 1', id: 21 },
    { title: 'title 2', text: 'some random text 2', id: 22 },
    { title: 'title 3', text: 'some random text 3', id: 23 },
    { title: 'title 4', text: 'some random text 4', id: 24 },
    { title: 'title 5', text: 'some random text 5', id: 25 },
  ];

  getById(id: number) {
    return this.posts.find((item) => item.id === id);
  }
}
