import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./comic/comic.module').then(m => m .ComicModule)
  },
  {
    path: 'admin',
    children: [
        {path: '',loadChildren: () => import('./manage/home.module').then( m => m.HomeModule)}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
 
 preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
