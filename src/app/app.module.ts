import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, house, search, film, envelope, heart, plusSquare, personBoundingBox } from 'ngx-bootstrap-icons';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LogoComponent } from './logo/logo.component';
import { ExploreComponent } from './explore/explore.component';
import { ReelsComponent } from './reels/reels.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LogoComponent,
    ExploreComponent,
    ReelsComponent,
    MessagesComponent,
    NotificationsComponent,
    CreateComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick({ house, search, film, envelope, heart, plusSquare, personBoundingBox }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
