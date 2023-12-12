import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, house, search, film, envelope, heart, plusSquare, personBoundingBox } from 'ngx-bootstrap-icons';
import { FormsModule } from '@angular/forms';


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
import { PostComponent } from './post/post.component';
import { VideoComponent } from './video/video.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { PersonalInformationService } from './services/personal-information.service';
import { NetworkService } from './services/network.service';
import { DetailPostComponent } from './shared/detail-post/detail-post.component';
import { SharedModule } from './shared/shared.module';




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
    ProfileComponent,
    PostComponent,
    VideoComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxBootstrapIconsModule.pick({ house, search, film, envelope, heart, plusSquare, personBoundingBox }),
    FormsModule

  ],
  providers: [PersonalInformationService, NetworkService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
