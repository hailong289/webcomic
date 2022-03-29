import { Routes, RouterModule } from '@angular/router';
import { ComicComponent } from './comic.component';
import { NgModule } from '@angular/core';



export const routes: Routes = [
  {
    path: '',
    component: ComicComponent,
    children: [
        {path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) }
    ]
  },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ComicRoutingModule {}
