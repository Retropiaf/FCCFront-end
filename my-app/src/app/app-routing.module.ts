import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChallengePageComponent } from './challengePage/challengePage.component';

const routes: Routes = [
  { path: '', redirectTo: '/chapters', pathMatch: 'full' }, { path: 'chapters', component: ChaptersComponent }, { path: 'challenge/:id', component: ChallengePageComponent }
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
