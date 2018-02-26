import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../challenge';

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.css']
})
export class ChallengePageComponent implements OnInit {
  @Input() challenge: Challenge;
  constructor() { }

  ngOnInit() {
  }

}
