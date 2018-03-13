import { Component, OnInit, Input, Type } from '@angular/core';
import { Challenge } from '../challenge';
import { ChallengeService } from '../challenge.service';
import { Chapter } from '../chapter';
import {ListItemComponent} from '../list-item.component';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css'],
})
export class ChallengesComponent
 implements ListItemComponent {
  @Input() data: any;
  challenges: Challenge[];
  selectedChallenge = Challenge;

  constructor(private challengeService: ChallengeService) {
   }

  ngOnInit() {
  this.getChallenges(this.data);
  }

  onSelect(challenge: Challenge): void {
    this.selectedChallenge = Challenge;
  }


  getChallenges(data): void {
    this.challengeService.getChallenges(data).subscribe(challenges => this.challenges = challenges);
  }




}
