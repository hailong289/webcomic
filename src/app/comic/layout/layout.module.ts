import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


export const routers: Routes = [
    {path: '', component: LayoutComponent},
]

@NgModule({
    declarations: [LayoutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routers)
    ],
})

export class LayoutModule {}
