import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikedRoutingModule } from './liked-routing.module';
import { LikedComponent } from './liked.component';
import {PostModule} from "../post/post.module";



@NgModule({
  declarations: [
    LikedComponent,

  ],
  imports: [
    CommonModule,
    PostModule,
    LikedRoutingModule
  ]
})
export class LikedModule { }
