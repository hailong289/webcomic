
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { response } from '../model/response';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment.prod';
@Injectable({
    providedIn: 'root'
})

export class APIADMIN {
    private readonly path = environment.bashUrl;

    constructor(private http: HttpClient, private spinner: NgxSpinnerService){

    }

    get(url: string,params = {}): Observable<response[]>{
        // this.spinner.show();
        return this.http.get<response[]>(this.path + url, {params: params}).pipe(
            catchError(this.errorHandler),
            tap(res => this.spinner.hide())
        );
    }
    post(url: string, params = {}){
        this.spinner.show();
        return this.http.post<response[]>(this.path + url, params).pipe(
            catchError(this.errorHandler),
            tap(res => this.spinner.hide())
        );
    }
    delete(url: string){
        this.spinner.show();
        return this.http.delete(this.path + url).pipe(
            catchError(this.errorHandler),
            tap(res => this.spinner.hide())
        );
    }
    patch(url:string, params = {}){
        this.spinner.show();
        return this.http.patch(this.path + url, params).pipe(
            catchError(this.errorHandler),
            tap(res => this.spinner.hide())
        );
    }
    put(url:string, params = {}){
        this.spinner.show();
        return this.http.put(this.path + url, params).pipe(
            catchError(this.errorHandler),
            tap(res => this.spinner.hide())
        );
    }
    errorHandler(error: HttpErrorResponse) {
        // if (error.error instanceof ErrorEvent) {
        //   // A client-side or network error occurred. Handle it accordingly.
        //   console.error('An error occurred:', error.error.message || '');
        // } else {
        //   // The backend returned an unsuccessful response code.
        //   // The response body may contain clues as to what went wrong,
        //   console.log(
        //     `Backend returned code ${error.status}, ` +
        //     `body was: ${error.error}`);
        // }
        // // return an observable with a user-facing error message
        return Observable.throw('Có lỗi xảy ra' || '');
    }
}
