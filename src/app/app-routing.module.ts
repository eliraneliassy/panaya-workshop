import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'feed', pathMatch: 'full'},
  { path: 'feed', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule) },
  { path: 'liked', loadChildren: () => import('./liked/liked.module').then(m => m.LikedModule) }]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
