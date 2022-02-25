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
  valueIconLeft = null;
  constructor() { }

  ngOnInit(): void {
      this.items = [
        {label:'Categories'},
        {label:'Sports'},
    ];
    this.home = {icon: 'pi pi-home', label: 'Trang chủ'};
  }

}
