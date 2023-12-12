import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ExploreComponent } from './explore/explore.component';
import { ReelsComponent } from './reels/reels.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { VideoComponent } from './video/video.component';
import { DetailPostComponent } from './shared/detail-post/detail-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "home", 
    component: HomeComponent 
  },

  {
    path: "search", 
    component: SearchComponent 
  },
  {
    path: "reels", 
    component: ReelsComponent 
  },
  {
    path: "messages", 
    component: MessagesComponent 
  },
  {
    path: "notifications", 
    component: NotificationsComponent 
  },
  {
    path: "create", 
    component: CreateComponent,
    children: [
      {
        path:"video",
        component: VideoComponent
      },
      {
        path:"post",
        component: PostComponent
      },
    ]
  },
  {
    path: "profile", 
    component: ProfileComponent 
  },
  {
    path: "posts",
    children: [
      {
      path: ":id",
      component: DetailPostComponent
      }

    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
