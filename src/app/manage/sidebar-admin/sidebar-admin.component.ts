import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import Utils from 'src/app/helpers/Utils';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {
  constructor(private route: Router) { }
  items: any[] = [];
  showP: boolean = false;
  activeState: any = [true];
  isMobile = Utils.detectMob();
  @Input() tg_menu = false;

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
        idsub: 'sub_category',
        children: [
          { label: 'Danh sách', icon: 'pi pi-fw pi-trash', routerLink: 'category', routerLinkActiveOptions: {exact:true} }
        ]
      },
      {
        label: 'Quản lý truyện',
        icon: 'pi pi-fw pi-question',
        key: 'comic',
        idsub: 'sub_comic',
        children: [
          {
            label: 'Danh sách truyện',
            icon: 'pi pi-list',
            routerLink: 'chapters',
            routerLinkActiveOptions: {exact:true}
          },
        ]
      },
      {
        label: 'Quản lý nhóm',
        icon: 'pi pi-fw pi-question',
        key: 'group',
        idsub: 'sub_group',
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
        idsub: 'sub_job',
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
        idsub: 'sub_user',
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
        idsub: 'sub_rate',
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
        idsub: 'sub_setting',
        children: [
          {
            label: 'Tài khoản',
            icon: 'pi pi-user',
          },
          {
            label: 'Đăng xuất',
            icon: 'pi pi-sign-out'
          }
        ]
      }
    ];

  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.tg_menu);
  }
  show() {
    this.tg_menu = true;
  }
  logout(){
     localStorage.clear();
     this.route.navigate(['admin/login']);
  }

  handleSubMenu(sub: string, i: number){
    // console.log(sub);
    const dom: any = document.querySelector('#'+sub);
    const menu_sub: NodeListOf<Element | any> = document.querySelectorAll('.layout-menu-child');
    if(menu_sub){
        for (let i = 0; i < menu_sub.length; i++) {
            if(menu_sub[i].style.display == 'block'){
                menu_sub[i].style.cssText = 'display: none';
            }
        }
    }
    if(dom){
        dom.style.cssText = 'display: block';
    }
  }

}
