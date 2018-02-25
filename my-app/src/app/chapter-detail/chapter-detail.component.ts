import { Component, OnInit, Input } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {
  @Input() chapter: Chapter;
  constructor() { }

  ngOnInit() {
  }

}
