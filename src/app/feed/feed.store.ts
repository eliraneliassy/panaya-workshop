import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Post} from "../posts.interface";

export interface FeedState {
  posts: Post[]
}

export function createInitialState(): FeedState {
  return {
    posts: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'feed' })
export class FeedStore extends Store<FeedState> {

  constructor() {
    super(createInitialState());
  }
}
