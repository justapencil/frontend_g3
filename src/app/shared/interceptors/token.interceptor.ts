import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import validateToken from 'src/app/utils/validateToken';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //validate the token
    // based on the validation we can take a call whether to proceed or not
    // token has user info

  if(request.url.includes('login') || request.url.includes('register')){
  
  }  
  if(validateToken()){

    const token = localStorage.getItem('token');
    
    request = request.clone({
      headers: request.headers.set('authorization',token || '')});
      return next.handle(request);
  }
  else{
    
    this.router.navigate(['/user/login']);
  }
  // token.expired ==> it should redirect to login package
  return next.handle(request);
  }
}
