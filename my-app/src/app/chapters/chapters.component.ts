import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Chapter } from '../chapter';
// import { ChallengeList } from '../challengeList';
import { ChapterService } from '../chapter.service';
import { ChallengeService } from '../challenge.service';
import { ChallengesComponent } from '../challenges/challenges.component';
import { Challenge } from '../challenge';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
})
export class ChaptersComponent implements OnInit {
  private data: number;
  chapters: Chapter[];
  challenges: Challenge[];
  @ViewChild("appList", { read: ViewContainerRef }) container;

  selectedChapter: Chapter;

  constructor(private chapterService: ChapterService, private componentFactoryResolver: ComponentFactoryResolver, private challengeService: ChallengeService){}

  ngOnInit() {
    this.getChapters();
  }

  onSelect(chapter: Chapter): void {
    this.selectedChapter = chapter;
    this.data = chapter.id;
    this.displayList(this.data);
  }

  getChapters(): void {
    this.chapterService.getChapters().subscribe(chapters => this.chapters = chapters);
  }
  displayList(id): void {
    this.container.clear();

    let factory = this.componentFactoryResolver.resolveComponentFactory(ChallengesComponent);

    let componentRef = this.container.createComponent(factory);

    componentRef.instance.data = id;

  }


}
