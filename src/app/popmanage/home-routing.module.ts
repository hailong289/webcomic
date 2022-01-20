import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path:'',redirectTo:'dasboard', pathMatch:'full'},
    {path:'login',component: LoginComponent},
    {path:'dasboard', component: HomeComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }