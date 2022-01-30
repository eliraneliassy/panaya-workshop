import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Post} from "./posts.interface";
import {PostsService} from "./posts.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{

  posts$: Observable<Post[]> = new Observable();

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }
}
