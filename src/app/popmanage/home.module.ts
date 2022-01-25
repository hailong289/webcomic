import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { FooterComponent } from './footer/footer.component';
import {SidebarModule} from 'primeng/sidebar';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {PanelMenuModule} from 'primeng/panelmenu';
@NgModule({

  declarations: [
    SidebarAdminComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HomeRoutingModule,
    SidebarModule,
    ButtonModule,
    CommonModule,
    PanelMenuModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }