
import { NgModule } from '@angular/core';
import { DasboardRoutingModule } from './dasboard-routing.module';
import { DasboardComponent } from './dasboard.component';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import { TimelineModule } from "primeng/timeline";
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        DasboardComponent
    ],
    imports: [
        CommonModule,
        DasboardRoutingModule,
        CardModule,
        ChartModule,
        TimelineModule,
        TableModule
    ]
})

export class DasboardModule {}