import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/http-service/test.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {
  val1: number = 5;
  constructor(private test: TestService) { }
  products: any;
  ngOnInit(): void {
    this.test.getDumpapi().subscribe(res=>{
      this.products = res;
      console.log(this.products);
    })
  }

}
