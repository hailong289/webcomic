import { NgModule } from "@angular/core";
import { CategoryComponent } from './category.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { TableModule } from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import { SharedModuleV2 } from './../../shared/sharedV2.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormCreateEditCategoryComponent } from './form-create-edit-category/form-create-edit-category.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
const route: Routes = [
    {path: '', component: CategoryComponent}
];

@NgModule({
    declarations: [
        CategoryComponent,
        FormCreateEditCategoryComponent
    ],
    imports: [
 
    RouterModule.forChild(route),
        CommonModule,
        TableModule,
        MultiSelectModule,
        SharedModuleV2,
        ConfirmDialogModule,
        DynamicDialogModule,
        RadioButtonModule,
        ConfirmPopupModule
    ],
    providers: [ConfirmationService]
})



export class CategoryModule {}
