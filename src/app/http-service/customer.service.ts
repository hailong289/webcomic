import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomersLarge() {
    return this.http.get<any>('assets/customers-large.json')
        .toPromise()
        .then(res => <any[]>res.data)
        .then(data => { return data; });
  }
}
