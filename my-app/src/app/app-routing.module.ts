import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChaptersComponent }      from './chapters/chapters.component';

const routes: Routes = [
  { path: 'chapters', component: ChaptersComponent }
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
