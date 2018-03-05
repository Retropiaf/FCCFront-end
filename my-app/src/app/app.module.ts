import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ChaptersComponent } from './chapters/chapters.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengePageComponent } from './challengePage/challengePage.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';

import { FormsModule } from '@angular/forms';



import { ChapterService } from './chapter.service';
import { ChallengeService } from './challenge.service';


import { AppRoutingModule } from './/app-routing.module';
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
  ],
  entryComponents: [ChallengesComponent],
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
