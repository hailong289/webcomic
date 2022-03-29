import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


export const route: Routes = [
    {path: '', component: LayoutComponent},
]

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(route)
    ],
})

export class LayoutModule {}
