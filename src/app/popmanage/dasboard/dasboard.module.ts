
import { NgModule } from '@angular/core';
import { DasboardRoutingModule } from './dasboard-routing.module';
import { DasboardComponent } from './dasboard.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
@NgModule({
    declarations: [
        DasboardComponent
    ],
    imports: [
        DasboardRoutingModule,
        ButtonModule,
        InputTextModule
    ]
})

export class DasboardModule {}