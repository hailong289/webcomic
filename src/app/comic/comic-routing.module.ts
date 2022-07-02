import { Routes, RouterModule } from '@angular/router';
import { ComicComponent } from './comic.component';
import { NgModule } from '@angular/core';



export const routes: Routes = [
    {
        path: '',
        component: ComicComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
            },
            {
                path: 'truyen/:name',
                loadChildren: () => import('./comic-detail/comic-detail.module').then( m => m.ComicDetailModule)
            },
            {
                path: 'danh-sach',
                loadChildren: () => import('./list-comic/list-comic.module').then( m => m.ListModule)
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ComicRoutingModule { }
