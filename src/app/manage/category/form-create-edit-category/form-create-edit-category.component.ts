import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoryService } from './../../../http-service/category.service';

@Component({
  selector: 'app-form-create-edit-category',
  templateUrl: './form-create-edit-category.component.html',
  styleUrls: ['./form-create-edit-category.component.scss']
})
export class FormCreateEditCategoryComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder, private categoryService: CategoryService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
      this.form = this.fb.group({
        id: null,
        category_name: ['', Validators.required],
        invalid: 0,
      })
  }

  ngOnInit(): void {
    if(this.config.data){
      const data = this.config.data;
      this.form.patchValue(data);
    }
  }

  onSubmit(){
      console.log(this.form.valid);
      console.log(this.form.value);
      if(this.form.valid){
        
        const params = this.form.value;
        const id = params['id'];
        delete params['id'];
        this.categoryService.createOrUpdate(params, id).subscribe((res: any)=>{
            if(res) this.ref.close(true);
         })
      }
  }

}
