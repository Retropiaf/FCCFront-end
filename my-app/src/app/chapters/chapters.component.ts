import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Chapter } from '../chapter';
// import { ChallengeList } from '../challengeList';
import { ChapterService } from '../chapter.service';
import { ChallengeService } from '../challenge.service';
import { Challenge } from '../challenge';
import { ListDirective } from '../list.directive';
import { ChallengeItem } from '../challenge-item';



@Component({

  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
})
export class ChaptersComponent implements OnInit {
  // private chapterId: number;
  chapters: Chapter[];
  // challenges: Array<Challenge>;
  challenges: Challenge[];
  @ViewChild(ListDirective) appList: ListDirective;


  selectedChapter: Chapter;

  constructor(private chapterService: ChapterService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.getChapters();
  }

  onSelect(chapter: Chapter): void {
    this.selectedChapter = chapter;
    // this.chapterId = chapter.id;
    console.log(chapter.id);
    this.buildChallengeList(ChallengeService);
  }

  buildChallengeList(challengeService): any {
    challengeService.getChallenges().subscribe(challenges => this.challenges = challenges);
  }
  getChapters(): void {
    this.chapterService.getChapters().subscribe(chapters => this.chapters = chapters);
  }
  // displayList(): void {
  //   let viewContainerRef = this.appList.viewContainerRef;
  //
  //
  //   let componentFactory = this.componentFactoryResolver;
  //
  //
  //   this.challenges.forEach((challengeItem) {
  //     let item = new ChallengeItem(challengeItem, {id: challengeItem.id, title: challengeItem.title}),
  //     componentFactory.resolveComponentFactory(item.component);
  //   });
  //
  //
  //
  //   viewContainerRef.clear();
  //
  // }


}
