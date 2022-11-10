import {Component, OnInit} from '@angular/core';
import { Output, EventEmitter,Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import Util from 'src/app/helpers/Utils';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    items: MenuItem[] = [];
    home: MenuItem = {};
    valueIconLeft = null;
    @Output() toggleMenu = new EventEmitter<boolean>();
    @Input() tg_menu = false;
    isMobile = false;

    constructor() {
    }

    ngOnInit(): void {
        this.items = [
            {label: 'Categories'},
            {label: 'Sports'},
        ];
        this.home = {icon: 'pi pi-home', label: 'Trang chủ'};
        this.isMobile = Util.detectMob();
    }

    handelMenu(){
        this.tg_menu = !this.tg_menu;
        this.toggleMenu.emit(this.tg_menu);
    }

}
