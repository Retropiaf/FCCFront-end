import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChaptersComponent } from './chapters/chapters.component';


import { FormsModule } from '@angular/forms';

import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component'; // <-- NgModel lives here

import { ChapterService } from './chapter.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ChaptersComponent,
    ChapterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ChapterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
