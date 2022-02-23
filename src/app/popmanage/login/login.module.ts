import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { LoginComponent } from "./login.component";
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
const routes: Routes = [
  { path:'', component: LoginComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    InputTextModule,
    CommonModule,
    ButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ] 
})

export class LoginModule {}
