import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RegisterComponent } from './register/register.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { HomeRoutingModule } from './home-routing.module';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    SidebarAdminComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    BreadcrumbComponent
  ],
  imports: [
    SidebarModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    PanelMenuModule,
    BreadcrumbModule,
    HomeRoutingModule,
    LoginModule
  ]
})
export class HomeModule { }
