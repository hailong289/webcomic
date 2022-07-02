import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
//   declarations: [SharedComponent],
  imports: [
      CommonModule,
      ButtonModule,
      InputTextModule
  ],
  exports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
//   exports: [SharedComponent]
})
export class SharedModuleV2 {}