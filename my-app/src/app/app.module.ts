import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ChaptersComponent } from './chapters/chapters.component';
import { ChallengesComponent } from './challenges/challenges.component';

import { FormsModule } from '@angular/forms';

import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component'; // <-- NgModel

import { ChapterService } from './chapter.service';
import { ChallengeService } from './challenge.service';


import { AppRoutingModule } from './/app-routing.module';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { ListDirective } from './list.directive';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ChaptersComponent,
    ChapterDetailComponent,
    ChallengesComponent,
    ChallengePageComponent,
    ListDirective,
    // ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ChapterService,
    ChallengeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
