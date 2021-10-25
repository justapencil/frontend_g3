import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const headerData = { headers: { 'Content-Type': 'application/json'}};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api:string='/api/user/'


  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<any> {
    return this.httpClient.post(this.api + 'add', user); 
  }
  login(emailId: string,password: string): Observable<any> {
    return this.httpClient.get(this.api + 'login?emailid='+ emailId+'&userpassword='+ password);
  }
}
