import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Challenge } from '../challenge';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challengePage',
  templateUrl: './challengePage.component.html',
  styleUrls: ['./challengePage.component.css']
})
export class ChallengePageComponent implements OnInit {
  // @Input() challenge: Challenge;
  challenge: Challenge;

  constructor(
    private route: ActivatedRoute,
    private challengeService: ChallengeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getChallenge();
  }
  getChallenge(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.challengeService.getChallenge(id)
    .subscribe(challenge => {
      this.challenge = challenge;
      // this.evaluateInlineCSS();
    });

  }

  evaluateInlineCSS(): void {

    let instructions = this.challenge.description;

    let evaluatedInstuctions = "";

    instructions.forEach(function(sentence) {
      if (sentence != null && sentence  != undefined) {
        evaluatedInstuctions += sentence += "\n";
      }
    });

    //
    // var replace = evaluatedInstuctions.replace(/<code>/g, '<span class="code">');
    //
    // var replace = evaluatedInstuctions.replace(/<\/code>/g, '<\/span>');
    //
    // console.log("replace: ", replace);

    // document.getElementById("evaluatedInstuctions").innerHTML = evaluatedInstuctions;


  }

}
