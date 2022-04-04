
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ComicDetailComponent } from './comic-detail.component';



export const routers: Routes = [
    {path: '', component: ComicDetailComponent},
]

@NgModule({
    declarations: [ComicDetailComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routers)
    ],
})

export class ComicDetailModule {}
