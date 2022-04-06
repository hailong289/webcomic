import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/http-service/test.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  cars: any[] = [];
  constructor(private test: TestService) { }
  products: any;

  ngOnInit(): void {
    this.cars = [
      {id: 1, brand: 'hehe',year: '2022-03-30',color: 'red'},
      {id: 1, brand: 'hehe',year: '2022-03-30',color: 'red'},
    ];
    this.test.getDumpapi().subscribe(res=>{
      this.products = res;
      console.log(this.products);
    })
  }
 

}
