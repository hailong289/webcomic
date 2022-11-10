import {Component} from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    title = 'poptruyen';

    release = "test release";
    isDesktopDevice = false;
    tg_menu = false;
    constructor(private deviceService: DeviceDetectorService) {
        this.isDesktopDevice = this.deviceService.isDesktop();
    }
    with = '240px';
   ngOnInit(): void {
        document.documentElement.style.setProperty("--sideBar", this.with);
   }
   toggleMenu(data: boolean){
    //    if(data){
    //       this.with = '50px';
    //    }else{
    //       this.with = '240px';
    //    }
    //    this.ngOnInit();
        this.tg_menu = data;
        console.log(this.tg_menu);

    }
}
