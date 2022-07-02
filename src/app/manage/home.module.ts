import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { SharedModuleV2 } from './../shared/sharedV2.module';
import {AccordionModule} from 'primeng/accordion';
// scroll bar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
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
    SharedModuleV2,
    CommonModule,
    PanelMenuModule,
    BreadcrumbModule,
    HomeRoutingModule,
    LoginModule,
    PerfectScrollbarModule,
    AccordionModule
  ],
  providers: [
      {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
