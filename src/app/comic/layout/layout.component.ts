import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  cars: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cars = [
      {id: 1, brand: 'hehe',year: '2022-03-30',color: 'red'},
      {id: 1, brand: 'hehe',year: '2022-03-30',color: 'red'},
    ]
  }

}
