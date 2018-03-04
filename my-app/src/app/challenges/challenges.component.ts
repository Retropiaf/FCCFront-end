import { Component, OnInit, Input, Type } from '@angular/core';
import { Challenge } from '../challenge';
import { ChallengeService } from '../challenge.service';
import { Chapter } from '../chapter';
import { ListDirective } from '../list.directive';
import {ListItemComponent} from '../list-item/list-item.component';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css'],
})
export class ChallengesComponent
 implements ListItemComponent {
  @Input() data: any;
  private id: number;

  @Input() chapterId: any;

  challenges: Challenge[];

  selectedChallenge: Challenge;

  constructor(private challengeService: ChallengeService) {
   }

  ngOnInit() {
  this.getChallenges(this.data);
  }

  onSelect(challenge: Challenge): void {
    // this.selectedChallenge = challenge;

  }


  getChallenges(data): void {
    this.challengeService.getChallenges(data).subscribe(challenges => this.challenges = challenges);
  }




}
