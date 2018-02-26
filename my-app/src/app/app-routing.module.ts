import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChallengesComponent } from './challenges/challenges.component';

const routes: Routes = [
  { path: '', redirectTo: '/chapters', pathMatch: 'full' }, { path: 'chapters', component: ChaptersComponent }, { path: 'challenges', component: ChallengesComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
