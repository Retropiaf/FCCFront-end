import { Injectable } from '@angular/core';
import { Challenge } from './challenge';
import { ChallengesComponent } from './challenges/challenges.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChallengeService {
  private url = 'http://localhost:3000/challenges?chapter_id=';  // URL to web api

  constructor(private http: HttpClient) {

  }

  getHeroes() { return "HEROES"; }

  getChallenges(id): Observable<Challenge[]> {
    console.log("Inside getChallenges, id: " + id);
    console.log("Inside getChallenges, this.url + id: " + this.url + id);
    return this.http.get<Challenge[]>(this.url + id)
  }

}
