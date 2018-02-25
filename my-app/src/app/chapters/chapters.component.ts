import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';
import { ChapterService } from '../chapter.service';

@Component({

  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
})
export class ChaptersComponent implements OnInit {
  chapters: Chapter[];

  selectedChapter: Chapter;

  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
    this.getChapters();
  }

  onSelect(chapter: Chapter): void {
    this.selectedChapter = chapter;

  }

  getChapters(): void {
    this.chapterService.getChapters().subscribe(chapters => this.chapters = chapters);
}


}
