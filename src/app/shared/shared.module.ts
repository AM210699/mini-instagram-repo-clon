import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { BadgeComponent } from './badge/badge.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { HighlightComponent } from './highlight/highlight.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';



@NgModule({
  declarations: [
    ImageComponent,
    BadgeComponent,
    DetailPostComponent,
    HighlightComponent,
    TabComponent,
    TabsComponent,
    ThumbnailComponent,
  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageComponent,
    BadgeComponent,
    ThumbnailComponent,
    TabsComponent,
    TabComponent,
    HighlightComponent,
    DetailPostComponent
  ]
})
export class SharedModule { }
