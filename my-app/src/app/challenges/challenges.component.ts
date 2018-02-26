import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../challenge';
import { ChallengeService } from '../challenge.service';
import { Chapter } from '../chapter';


@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  @Input() chapter: Chapter;
  
  challenges: Challenge[];

  selectedChallenge: Challenge;

  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.getChallenges();
  }

  onSelect(challenge: Challenge): void {
    this.selectedChallenge = challenge;

  }

  getChallenges(): void {
    this.challengeService.getChallenges().subscribe(challenges => this.challenges = challenges);
  }

}
