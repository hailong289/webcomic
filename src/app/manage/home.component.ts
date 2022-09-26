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
    constructor(private deviceService: DeviceDetectorService) {
        this.isDesktopDevice = this.deviceService.isDesktop();
    }

    detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
}
