import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardLoadService } from './auth/popmanage/auth-guard-load.service';
import { HomeComponent } from './manage/home.component';
import { AuthGuardService } from './auth/popmanage/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path:'admin/login',
    loadChildren: () => import("./manage/login/login.module").then( m => m.LoginModule),
    canLoad: [AuthGuardLoadService],
  },
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [AuthGuardService],

    children: [
        { path: '', loadChildren: () => import('./manage/dasboard/dasboard.module').then(m => m.DasboardModule) },
        { path: 'category',  loadChildren: () => import('./manage/category/category.module').then(m=> m.CategoryModule) },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

   preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [AuthGuardLoadService]
})
export class AppRoutingModule { }
