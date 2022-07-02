import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { VirtualScrollerModule} from 'primeng/virtualscroller';
import { DividerModule} from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";

export const routers: Routes = [
    {path: '', component: LayoutComponent},
]

@NgModule({
    declarations: [LayoutComponent],
    imports: [
        CommonModule,
        CardModule,
        CarouselModule,
        VirtualScrollerModule,
        DividerModule,
        BadgeModule,
        TableModule,
        TabViewModule,
        RouterModule.forChild(routers)
    ],
})

export class LayoutModule {}
