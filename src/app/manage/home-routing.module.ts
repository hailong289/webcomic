import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuardService } from '../auth/popmanage/auth-guard.service';

const routes: Routes = [
    { path:'login', loadChildren: () => import("./login/login.module").then( m => m.LoginModule)},
    {
      path:'',
      component: HomeComponent,
      canActivate: [AuthGuardService], 
      children: [
        {
          path: '',
          loadChildren: () => import('./dasboard/dasboard.module').then(m => m.DasboardModule)
        },
        {
          path: 'category',
          loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
        },
        {
          path: 'chapters',
          loadChildren: () => import('./chapter/chapter.module').then(m => m.ChapterModule)
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
