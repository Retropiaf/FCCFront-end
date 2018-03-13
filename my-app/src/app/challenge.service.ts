import { Injectable } from '@angular/core';
import { Challenge } from './challenge';
import { ChallengesComponent } from './challenges/challenges.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChallengeService {
  private allChallenges = 'http://localhost:3000/challenges?chapter_id=';  // URL to web api
  private oneChallenge = 'http://localhost:3000/challenges/'

  constructor(private http: HttpClient) {

  }

  getHeroes() { return "HEROES"; }

  getChallenges(id): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.allChallenges + id)
  }

  getChallenge(id: number): Observable<Challenge> {
    return this.http.get<Challenge>(this.oneChallenge + id)
  }

}
