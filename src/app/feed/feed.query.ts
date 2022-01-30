import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {FeedState, FeedStore} from "./feed.store";
import {Observable} from "rxjs";
import {Post} from "../posts.interface";

@Injectable({ providedIn: 'root' })
export class FeedQuery extends Query<FeedState> {

  selectAllState$: Observable<FeedState> = this.select();

  selectPosts$: Observable<Post[]> = this.select('posts');

  constructor(protected override store: FeedStore) {
    super(store);
  }

}
