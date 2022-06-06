import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import { CustomerService } from 'src/app/http-service/customer.service';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  datasource: any[] = [];

  title = 'Danh mục';
  title_list = 'Danh sách danh mục';

  customers: any[] = [];

  totalRecords: number = 0;

  cols: any[] = [];

  loading: boolean = false;

  constructor(
      private customerService: CustomerService, 
      private primengConfig: PrimeNGConfig,
      private confirmationService: ConfirmationService
    ) { }

  ngOnInit() {
      //datasource imitation
      this.customerService.getCustomersLarge().then(data => {
          this.datasource = data;
          this.totalRecords = data.length;
      });

      this.loading = true;
      this.primengConfig.ripple = true;
  }

  loadCustomers(event: LazyLoadEvent) {  
      this.loading = true;

      //in a real application, make a remote request to load data using state metadata from event
      //event.first = First row offset
      //event.rows = Number of rows per page
      //event.sortField = Field name to sort with
      //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
      //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

      //imitate db connection over a network
      setTimeout(() => {
          if (this.datasource) {
              this.customers = this.datasource.slice(event.first,event.rows);
              this.loading = false;
          }
      }, 1000);
  }
  confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });
    }

}
