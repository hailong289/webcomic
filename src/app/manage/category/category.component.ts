import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import { CustomerService } from 'src/app/http-service/customer.service';
import { ConfirmationService } from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { FormCreateEditCategoryComponent } from './form-create-edit-category/form-create-edit-category.component';
import { category } from './../../model/category';
import { CategoryService } from './../../http-service/category.service';
import { response } from './../../model/response';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [DialogService]
})
export class CategoryComponent implements OnInit {


  datasource: any[] = [];

  title = 'Danh mục';
  title_list = 'Danh sách danh mục';

  customers: any[] = [];
  category: category[] = [];

  totalRecords: number = 0;

  cols: any[] = [];

  loading: boolean = false;
  ref!: DynamicDialogRef;
  name = '';

  constructor(
      private customerService: CustomerService,
      private primengConfig: PrimeNGConfig,
      private confirmationService: ConfirmationService,
      public dialogService: DialogService,
      private categoryService: CategoryService
    ) { }

  ngOnInit() {
      this.primengConfig.ripple = true;
      this.getListCateory();
  }
  getListCateory(name = ''){
      this.loading = true;
      this.categoryService.getListCategory({category_name: name}).subscribe((res: any)=>{
          if(res){
            this.loading = false;
            // this.category = res.data.list_items;
            // console.log(res);
            this.category = res;
            this.totalRecords = res.length;
          }
      })
  }

  showForm(data = null) {
        const ref = this.dialogService.open(FormCreateEditCategoryComponent, {
            header: 'Thêm danh mục',
            width: '50%',
            // contentStyle: {"max-height": "500px"},
            data: data,
            baseZIndex: 10000
        });
        ref.onClose.subscribe((res) =>{
            res && this.getListCateory();
        });
  }
  confirm(event: Event, id: number) {
    this.confirmationService.confirm({
        target: event.target ?? undefined,
        message: 'Bạn có chắc chắn xóa mục này?',
        icon: 'pi pi-exclamation-triangle',
        accept: (e: any) => {
            this.categoryService.delete(id).subscribe(res => {
                 res && this.getListCateory();
            });
        }
    });
  }

  search(){
     this.getListCateory(this.name);
  }

}
