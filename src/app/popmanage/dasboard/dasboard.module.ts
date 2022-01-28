
import { NgModule } from '@angular/core';
import { DasboardRoutingModule } from './dasboard-routing.module';
import { DasboardComponent } from './dasboard.component';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
@NgModule({
    declarations: [
        DasboardComponent
    ],
    imports: [
        DasboardRoutingModule,
        CardModule,
        ChartModule
    ]
})

export class DasboardModule {}