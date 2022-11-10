import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './comic/error/not-found/not-found.component';

const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('./comic/comic.module').then(m => m .ComicModule)
//   },
  {
    path: 'admin',
    children: [
        {path: '',loadChildren: () => import('./manage/home.module').then( m => m.HomeModule)}
    ],
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
