import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Post} from "../posts.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  @Input() post: Post | null = null;
  @Output() liked = new EventEmitter<Post | null>();

  constructor() { }

  ngOnInit(): void {
  }

  like() {
    this.liked.emit(this.post);
  }

}
