import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Trang chủ',
          // items: [{
          //         label: 'Trang chủ', 
          //         icon: 'pi pi-fw pi-plus',
          //         // items: [
          //         //     {label: 'Project'},
          //         //     {label: 'Other'},
          //         // ]
          //     },
          //     {label: 'Open'},
          //     {label: 'Quit'}
          // ]
      },
      {
          label: 'Thể loại',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
        label: 'Hot',
        // icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Lịch sử',
        // icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Theo dõi',
        // icon: 'pi pi-fw pi-pencil',
      }
  ];
  }

}
