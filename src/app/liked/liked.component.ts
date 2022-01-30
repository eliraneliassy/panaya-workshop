import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../posts.interface";

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LikedComponent implements OnInit {

  posts$: Observable<Post[]> = new Observable<Post[]>();

  constructor() { }

  ngOnInit(): void {
  }

}
