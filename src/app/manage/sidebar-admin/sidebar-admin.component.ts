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
  items: MenuItem[] = [];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Trang chủ',
        icon: 'pi pi-home',
        url: '/admin/dashboard'
      },
      {
        label: 'Quản lý thể loại',
        icon: 'pi pi-tags',
        items: [
          { label: 'Danh sách', icon: 'pi pi-fw pi-trash', url: 'admin/category' }
        ]
      },
      {
        label: 'Quản lý truyện',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Danh sách truyện',
            icon: 'pi pi-list'
          },
          {
            label: 'Chappter',
            icon: 'pi pi-pi pi-bars'
          }
        ]
      },
      {
        label: 'Quản lý nhóm',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Danh sách',
            icon: 'pi pi-list'
          },
          {
            label: 'Vai trò',
            icon: 'pi pi-pi pi-bars'
          }
        ]
      },
      {
        label: 'Quản lý công việc',
        icon: 'pi pi-calendar-plus',
        items: [
          {
            label: 'Danh sách',
            icon: 'pi pi-list'
          }
        ]
      },
      {
        label: 'Quản lý người dùng',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Danh sách',
            icon: 'pi pi-list'
          }
        ]
      },
      {
        label: 'Quản lý phản hồi',
        icon: 'pi pi-comments',
        items: [
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
      },
      {
        label: 'Cài đặt',
        icon: 'pi pi-fw pi-cog',
        items: [
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
