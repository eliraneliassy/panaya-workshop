import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./posts.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.URL)
  }

}
