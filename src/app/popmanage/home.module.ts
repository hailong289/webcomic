import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarModule } from 'primeng/sidebar';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
@NgModule({

  declarations: [
    SidebarAdminComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    BreadcrumbComponent
  ],
  imports: [
    HomeRoutingModule,
    SidebarModule,
    ButtonModule,
    CommonModule,
    PanelMenuModule,
    BreadcrumbModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
