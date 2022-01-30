import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../posts.interface";
import {LikedQuery} from "./liked.query";

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LikedComponent implements OnInit {

  posts$: Observable<Post[]> = this.likedQuery.selectLiked$;
  numberOfliked$: Observable<number> = this.likedQuery.numerOfLikedPosts$;

  constructor(private likedQuery: LikedQuery) { }

  ngOnInit(): void {

  }

}
