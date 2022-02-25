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
@NgModule({

  declarations: [
    SidebarAdminComponent,
    FooterComponent,
    RegisterComponent,
    BreadcrumbComponent
  ],
  imports: [
    SidebarModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    PanelMenuModule,
    BreadcrumbModule
  ],
  exports: [
      BreadcrumbComponent,
      SidebarAdminComponent,
      FooterComponent
  ]
})
export class HomeModule { }
