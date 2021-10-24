import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Inside Header.interceptor');

    if(request.headers.has('Content-Type')) {
      console.log('Inside the if Condition');
      return next.handle(request);
    }
    request = request.clone({
      headers: request.headers.set('Content-Type', 'application/json'),
    });
    return next.handle(request);    
  }
}
