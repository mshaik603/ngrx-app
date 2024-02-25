import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../Models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost():Observable<PostModel[]>{
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
