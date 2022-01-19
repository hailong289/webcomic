import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: 'login',component: LoginComponent},
    {
      path:'', 
      component: HomeComponent, 
      children: [
        {path: '', loadChildren: ()=> import('./dasboard/dasboard.module').then(m => m.DasboardModule)}
      ]
    }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }