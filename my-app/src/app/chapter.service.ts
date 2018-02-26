import { Injectable } from '@angular/core';
import { Chapter } from './chapter';
import { CHAPTERS } from './mock-chapters';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ChapterService {

  constructor() { }

  getChapters(): Observable<Chapter[]> {
    return of(CHAPTERS);
  }

}
