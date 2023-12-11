import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ExploreComponent } from './explore/explore.component';
import { ReelsComponent } from './reels/reels.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: "search", 
    component: SearchComponent 
  },

  {
    path: "explore", 
    component: ExploreComponent 
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
    component: CreateComponent 
  },
  {
    path: "profile", 
    component: ProfileComponent 
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
