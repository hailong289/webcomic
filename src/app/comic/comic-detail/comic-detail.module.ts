
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ComicDetailComponent } from './comic-detail.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { DividerModule} from 'primeng/divider';
import {TableModule} from 'primeng/table'
import {InputTextareaModule} from 'primeng/inputtextarea';
import { TabViewModule } from "primeng/tabview";

export const routers: Routes = [
    {path: '', component: ComicDetailComponent},
]

@NgModule({
    declarations: [ComicDetailComponent],
    imports: [
        CommonModule,
        RatingModule,
        FormsModule,
        ButtonModule,
        DividerModule,
        TableModule,
        InputTextareaModule,
        TabViewModule,
        RouterModule.forChild(routers)
    ],
})

export class ComicDetailModule {}
