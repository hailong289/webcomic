import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ChapterComponent } from "./chapter.component";


const route: Routes  = [
    {path: '', component: ChapterComponent}
]

@NgModule({
    declarations: [
        ChapterComponent
    ],
    imports: [
        RouterModule.forChild(route),
        CommonModule
    ]
})

export class ChapterModule {}