import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Post} from "../posts.interface";

export interface LikedState {
  posts: Post[]
}

export function createInitialState(): LikedState {
  return {
    posts: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'liked' })
export class LikedStore extends Store<LikedState> {

  constructor() {
    super(createInitialState());
  }
}
