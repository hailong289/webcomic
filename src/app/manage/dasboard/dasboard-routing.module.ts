import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './dasboard.component';

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DasboardComponent}
];


@NgModule({
  imports: [
  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DasboardRoutingModule { }
