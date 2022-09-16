import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from './../model/response';
import { environment } from './../../environments/environment';
import { APIADMIN } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly category = '/category';
  constructor(public api: APIADMIN) { }

  getListCategory(params= {}): Observable<response[]> {
     return this.api.get(this.category, params);
  }
  createOrUpdate(params ={}, id = null){
      if(id){
        return this.api.patch(this.category + `/${id}`, params);
      }
      return this.api.post(this.category, params);
  }

  delete(id: number){
    return this.api.delete(this.category+ `/${id}`);
  }
}
