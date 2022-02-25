import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  items: MenuItem[] = [];
  home: MenuItem = {};
  constructor() { }

  ngOnInit(): void {
      this.items = [
        {label:'Categories'},
        {label:'Sports'},
        {label:'Football'},
        {label:'Countries'},
        {label:'Spain'},
        {label:'F.C. Barcelona'},
        {label:'Squad'},
        {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
    ];
    this.home = {icon: 'pi pi-home', label: 'Trang chủ'};
  }

}
