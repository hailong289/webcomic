import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getCarsSmall() {
    return this.http.get('https://61b077953c954f001722a3d9.mockapi.io/api/v1/user');
  }
}
