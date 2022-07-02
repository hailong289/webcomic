import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ListComicComponent } from './list-comic.component';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { VirtualScrollerModule} from 'primeng/virtualscroller';
import { DividerModule} from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import {PaginatorModule} from 'primeng/paginator';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
export const routers: Routes = [
    {path: '', component: ListComicComponent},
]

@NgModule({
    declarations: [ListComicComponent],
    imports: [
   
    CommonModule,
        CardModule,
        CarouselModule,
        VirtualScrollerModule,
        DividerModule,
        BadgeModule,
        PaginatorModule,
        TabViewModule,
        TableModule,
        RouterModule.forChild(routers)
    ],
})

export class ListModule {}