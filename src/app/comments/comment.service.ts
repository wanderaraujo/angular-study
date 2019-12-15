import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentModel } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(){
    return this.http.get<CommentModel[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
