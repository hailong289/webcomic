import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardLoadService as AuthGuardLoadAdmin  } from './auth/popmanage/auth-guard-load.service';
import { HomeComponent } from './manage/home.component';
import { AuthGuardService as AuthGuardAdmin } from './auth/popmanage/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path:'admin/login',
    loadChildren: () => import("./manage/login/login.module").then( m => m.LoginModule),
    canLoad: [AuthGuardLoadAdmin],
  },
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [AuthGuardAdmin],
    children: [
        { path: '', loadChildren: () => import('./manage/dasboard/dasboard.module').then(m => m.DasboardModule) },
        { path: 'category',  loadChildren: () => import('./manage/category/category.module').then(m=> m.CategoryModule)},

    ]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardAdmin],
    children: [
        { path: '', loadChildren: () => import('./manage/dasboard/dasboard.module').then(m => m.DasboardModule) },
        { path: 'category',  loadChildren: () => import('./manage/category/category.module').then(m=> m.CategoryModule)},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [AuthGuardAdmin]
})
export class AppRoutingModule { }
