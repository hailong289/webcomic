import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {
  display: boolean = false;
  constructor() { }
  items: MenuItem[] = [];
  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [
        // {
        //   label: 'New',
        //   icon: 'pi pi-fw pi-plus',
        //   items: [
        //     { label: 'User', icon: 'pi pi-fw pi-user-plus' },
        //     { label: 'Filter', icon: 'pi pi-fw pi-filter', url: 'admin/login' }
        //   ]
        // },
        { label: 'Open', icon: 'pi pi-fw pi-external-link', routerLink: '/admin/login', routerLinkActiveOptions: { exact: true } },
        { separator: true },
        { label: 'Quit', icon: 'pi pi-fw pi-times' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Hỗ trợ',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars'
          },
          // {
          //   label: 'Search',
          //   icon: 'pi pi-pi pi-search',
          //   items: [
          //     {
          //       label: 'Text',
          //       items: [
          //         {
          //           label: 'Workspace'
          //         }
          //       ]
          //     },
          //     {
          //       label: 'User',
          //       icon: 'pi pi-fw pi-file',
          //     }
          //   ]
          // }
        ]
      },
      {
        label: 'Cài đặt',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'người dùng',
            icon: 'pi pi-user',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save'},
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          // {
          //   label: 'Đăng xuất',
          //   icon: 'pi pi-fw pi-tags',
          //   items: [
          //     { label: 'Delete', icon: 'pi pi-fw pi-minus' }
          //   ]
          // },
          {
            label: 'Đăng xuất',
            icon: 'pi pi-sign-out'
          }
        ]
      }
    ];
  }
  show() {
    this.display = true;
  }

}
