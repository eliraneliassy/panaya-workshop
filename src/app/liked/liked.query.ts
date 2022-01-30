import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import {LikedState, LikedStore} from "./liked.store";
import {map, Observable} from "rxjs";
import {Post} from "../posts.interface";

@Injectable({ providedIn: 'root' })
export class LikedQuery extends Query<LikedState> {

  selectLiked$: Observable<Post[]> = this.select('posts');

  numerOfLikedPosts$: Observable<number> = this.selectLiked$.pipe(
    map((posts: Post[]) => posts.length)
  );

  constructor(protected override store: LikedStore) {
  super(store);
}

}
