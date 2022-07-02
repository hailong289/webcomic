import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token') ? localStorage.getItem('token'):null;
    // Check whether the token is expired and return
    // true or false
    return token ? true:false;
  }
}
