import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { LoginComponent } from "./login.component";
import { ButtonModule } from 'primeng/button';

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
    RouterModule.forChild(routes)
  ]
})

export class LoginModule {}
