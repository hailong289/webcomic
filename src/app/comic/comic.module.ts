
import { NgModule } from '@angular/core';
import { ComicComponent } from './comic.component';
import { CommonModule } from '@angular/common';
import { ComicRoutingModule } from './comic-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from './footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './error/not-found/not-found.component';

@NgModule({
    declarations: [
        ComicComponent,
        NavbarComponent,
        FooterComponent,
        NotFoundComponent
    ],
    imports: [
       CommonModule,
       InputTextModule,
       ButtonModule,
       MenubarModule,
       ComicRoutingModule
    ]
})

export class ComicModule { }
