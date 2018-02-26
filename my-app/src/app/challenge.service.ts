import { Injectable } from '@angular/core';
import { Challenge } from './challenge';
import { CHALLENGES } from './mock-challenges';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ChallengeService {

  constructor() { }

  getChallenges(): Observable<Challenge[]> {
    return of(CHALLENGES);
  }

}
