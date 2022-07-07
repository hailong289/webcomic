import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {
  display: boolean = false;
  constructor(private route: Router) { }
  items: any[] = [];
  showP: boolean = false;
  activeState: any = [true];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Trang chủ',
        icon: 'pi pi-home',
        routerLink: 'dashboard',
        routerLinkActiveOptions: {exact:true},
        key: 'dashboad'
      },
      {
        label: 'Quản lý thể loại',
        icon: 'pi pi-tags',
        key: 'category',
        children: [
          { label: 'Danh sách', icon: 'pi pi-fw pi-trash', routerLink: 'category', routerLinkActiveOptions: {exact:true} }
        ]
      },
      {
        label: 'Quản lý truyện',
        icon: 'pi pi-fw pi-question',
        key: 'comic',
        children: [
          {
            label: 'Danh sách truyện',
            icon: 'pi pi-list',
            routerLink: 'chapters',
            routerLinkActiveOptions: {exact:true}
          },
        //   {
        //     label: 'Chappter',
        //     icon: 'pi pi-pi pi-bars'
        //   }
        ]
      },
      {
        label: 'Quản lý nhóm',
        icon: 'pi pi-fw pi-question',
        key: 'group',
        children: [
          {
            label: 'Danh sách',
            icon: 'pi pi-list',
            routerLink: 'list-group',
            routerLinkActiveOptions: {exact:true}
          },
          {
            label: 'Vai trò',
            icon: 'pi pi-pi pi-bars',
            routerLink: 'role',
            routerLinkActiveOptions: {exact:true}
          }
        ]
      },
      {
        label: 'Quản lý công việc',
        icon: 'pi pi-calendar-plus',
        key: 'job',
        children: [
          {
            label: 'Danh sách',
            icon: 'pi pi-list'
          }
        ]
      },
      {
        label: 'Quản lý người dùng',
        icon: 'pi pi-fw pi-question',
        key: 'user',
        children: [
          {
            label: 'Danh sách',
            icon: 'pi pi-list'
          }
        ]
      },
      {
        label: 'Quản lý phản hồi',
        icon: 'pi pi-comments',
        key: 'rate',
        children: [
          {
            label: 'Bình luận',
            icon: 'pi pi-comment'
          },
          {
            label: 'Báo lỗi',
            icon: 'pi pi-comment'
          }
        ]
      },
      {
        label: 'Quản lý file',
        icon: 'pi pi-file',
        key: 'file',
        routerLink: 'file',
      },
      {
        label: 'Cài đặt',
        icon: 'pi pi-fw pi-cog',
        key: 'setting',
        children: [
          {
            label: 'Tài khoản',
            icon: 'pi pi-user',
            items: [
              { label: 'Thiết lập', icon: 'pi pi-fw pi-save'}
            ]
          },
          {
            label: 'Đăng xuất',
            icon: 'pi pi-sign-out',
            command: () => this.logout()
          }
        ]
      }
    ];
  }
  show() {
    this.display = true;
  }
  logout(){
     localStorage.clear();
     this.route.navigate(['admin/login']);
  }

}
