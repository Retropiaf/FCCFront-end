import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChaptersComponent } from './chapters/chapters.component';
import { ChallengesComponent } from './challenges/challenges.component';

import { FormsModule } from '@angular/forms';

import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component'; // <-- NgModel

import { ChapterService } from './chapter.service';
import { ChallengeService } from './challenge.service';


import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ChaptersComponent,
    ChapterDetailComponent,
    ChallengesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ChapterService,
    ChallengeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
