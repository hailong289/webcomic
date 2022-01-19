// Sử dụng service trong toàn bộ 
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { UserService } from './../http-service/user.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: []
})


export class ShareModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ShareModule,
            providers: [UserService]
        }
    }
}