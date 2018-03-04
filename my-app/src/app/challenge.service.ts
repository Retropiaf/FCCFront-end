import { Injectable } from '@angular/core';
import { Challenge } from './challenge';
import { ChallengesComponent } from './challenges/challenges.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChallengeService {
  // private challengesUrl = 'http://localhost:3000/challenges';

  private challengesUrl = 'http://localhost:3000/challenges?chapter_id=';  // URL to web api

  constructor(private http: HttpClient) {}

  getChallenges(id): Observable<Challenge[]> {
    this.challengesUrl += id;
    return this.http.get<Challenge[]>(this.challengesUrl)
  }

}
