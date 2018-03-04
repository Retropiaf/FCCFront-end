import { Component, OnInit, Input, Type } from '@angular/core';
import { Challenge } from '../challenge';
import { ChallengeService } from '../challenge.service';
import { Chapter } from '../chapter';


@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css'],
})
export class ChallengesComponent
 implements OnInit {
   @Input() data: any;
  private id: number;
  // private component: this;

  @Input() chapter: Chapter;

  // private id2 = this.chapter.id;

  challenges: Challenge[];

  selectedChallenge: Challenge;

  constructor(private challengeService: ChallengeService) {
    console.log("hello 1");
   }

  ngOnInit() {
    this.getChallenges();
    // this.id = this.selectedChallenge.id;
    console.log("hello 2");
  }

  onSelect(challenge: Challenge): void {
    this.selectedChallenge = challenge;

  }


  getChallenges(): void {
    console.log("hello 3");
    // this.challengeService.getChallenges().subscribe(challenges => this.challenges = challenges);
  }

}
