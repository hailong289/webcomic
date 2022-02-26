import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    children: [
        {path: '',loadChildren: () => import('./manage/home.module').then( m => m.HomeModule)}
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
