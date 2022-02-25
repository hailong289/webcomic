import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '../auth/popmanage/auth-guard.service';
import { AuthGuardLoadService } from '../auth/popmanage/auth-guard-load.service';

const routes: Routes = [
    { path:'',redirectTo:'login', pathMatch:'full'},
    {
        path:'login',
        loadChildren: () => import("./login/login.module").then( m => m.LoginModule),
        canLoad: [AuthGuardLoadService],
    },
    {
      path:'dashboard',
      component: HomeComponent,
      canActivate: [AuthGuardService],
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
