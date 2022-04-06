import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/http-service/test.service';

@Component({
  selector: 'app-list-comic',
  templateUrl: './list-comic.component.html',
  styleUrls: ['./list-comic.component.scss']
})
export class ListComicComponent implements OnInit {

  constructor(private test: TestService) { }
  products: any;
  ngOnInit(): void {
    this.test.getDumpapi().subscribe(res=>{
      this.products = res;
      console.log(this.products);
    })
  }

}
