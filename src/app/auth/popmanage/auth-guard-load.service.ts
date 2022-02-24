import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoadService implements CanLoad{

    constructor(private route: Router) {}
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(localStorage.getItem('token')){
            this.route.navigate(['admin/dashboard']);
            return false;
        }
        return true;
    }
}

