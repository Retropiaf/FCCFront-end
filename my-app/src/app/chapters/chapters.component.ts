import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Chapter } from '../chapter';
// import { ChallengeList } from '../challengeList';
import { ChapterService } from '../chapter.service';
import { ChallengeService } from '../challenge.service';
import { ChallengesComponent } from '../challenges/challenges.component';
import { Challenge } from '../challenge';
import { ListDirective } from '../list.directive';
import { ChallengeItem } from '../challenge-item';



@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
})
export class ChaptersComponent implements OnInit {
  private chapterId: number;
  chapters: Chapter[];
  challenges: Challenge[];
  // @ViewChild(ListDirective) appList: ListDirective;
  @ViewChild("appList", { read: ViewContainerRef }) container;

  selectedChapter: Chapter;

  constructor(private chapterService: ChapterService, private componentFactoryResolver: ComponentFactoryResolver, private challengeService: ChallengeService){}

  ngOnInit() {
    this.getChapters();
  }

  onSelect(chapter: Chapter): void {
    this.selectedChapter = chapter;
    this.chapterId = chapter.id;
    // console.log(chapter.id);
    // this.buildChallengeList(this.chapterId);
    this.displayList(this.chapterId);
  }

  // buildChallengeList(id): void {
  //   this.challengeService.getChallenges(id).subscribe(challenges => this.challenges = challenges);
  //   // console.log("this.challenges: ", this.challenges);
  //   this.displayList();
  // }
  getChapters(): void {
    this.chapterService.getChapters().subscribe(chapters => this.chapters = chapters);
  }
  displayList(id): void {
    // console.log("this.container", this.container);
    // this.viewContainerRef = this.container.viewContainerRef;

    this.container.clear();

    let factory = this.componentFactoryResolver.resolveComponentFactory(ChallengesComponent);

    let componentRef = this.container.createComponent(factory);
     console.log("Getting here");
    componentRef.instance.data = id;

  }


}
