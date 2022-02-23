import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path:'',redirectTo:'dasboard', pathMatch:'full'},
    { path:'login', loadChildren: () => import("./login/login.module").then( m => m.LoginModule)},
    {
      path:'dasboard',
      component: HomeComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('./dasboard/dasboard.module').then(m => m.DasboardModule)
        }
      ]
    }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
