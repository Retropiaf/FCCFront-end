import { Injectable } from '@angular/core';
import { Chapter } from './chapter';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChapterService {
  private chaptersUrl = 'http://localhost:3000/chapters';  // URL to web api
  constructor(private http: HttpClient) {

  }

  getChapters(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this.chaptersUrl)
  }

}
