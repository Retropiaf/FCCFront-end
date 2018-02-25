import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';
import { CHAPTERS } from '../mock-chapters';

@Component({

  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
})
export class ChaptersComponent implements OnInit {
  chapters = CHAPTERS;
  selectedChapter: Chapter;

  constructor() { }

  ngOnInit() {
  }

  onSelect(chapter: Chapter): void {
    this.selectedChapter = chapter;

  }

}
