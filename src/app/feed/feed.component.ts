import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {map, Observable} from "rxjs";
import {Post} from "../posts.interface";
import {PostsService} from "../posts.service";
import {FeedQuery} from "./feed.query";
import {FeedState, FeedStore} from "./feed.store";
import {LikedState, LikedStore} from "../liked/liked.store";
import {LikedQuery} from "../liked/liked.query";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {

  posts$: Observable<Post[]> = this.feedQuery.selectPosts$;

  constructor(private postsService: PostsService,
              private feedQuery: FeedQuery,
              private feedStore: FeedStore,
              private likedStore: LikedStore,
              private  likedQuery: LikedQuery) {
  }

  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe((posts) =>
        this.feedStore.update((currentState: FeedState) => ({...currentState, posts}))
      );
  }

  likedPost(post: Post | null) {
    this.likedStore.update((currentState: LikedState) =>
      ({...currentState, posts: [post as Post, ...currentState.posts]})
    )
  }

  isLiked(post: Post): Observable<boolean>{
    return this.likedQuery.selectLiked$.pipe(
      map(likedPosts => {
        if (likedPosts.findIndex(x => x.id === post.id )) {
          return true;
        }

        return  false;
      })
    )
  }

}
