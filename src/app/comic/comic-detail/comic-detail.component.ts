import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {
  val1: number = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
