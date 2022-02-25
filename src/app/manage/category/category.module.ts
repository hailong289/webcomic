import { NgModule } from "@angular/core";
import { CategoryComponent } from './category.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";

const route: Routes = [
    {path: 'category', component: CategoryComponent}
];

@NgModule({
    declarations: [
        CategoryComponent
    ],
    imports: [
        RouterModule.forChild(route),
        CommonModule
    ]
})



export class CategoryModule {}
