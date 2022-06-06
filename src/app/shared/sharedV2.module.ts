import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";


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
    InputTextModule
  ]
//   exports: [SharedComponent]
})
export class SharedModuleV2 {}