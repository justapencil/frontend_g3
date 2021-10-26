import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Role } from '../models/role';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  api:string='/api/admin/user/'
  apirole:string='/api/role/'
  constructor(private httpClient:HttpClient) { }
  register(role: Role): Observable<any> {
    return this.httpClient.post(this.apirole + 'add', role); 
  }
  registeruser(user: User): Observable<any> {
    return this.httpClient.post(this.api + 'add', user); 
  }
  getrole(): Observable<any> {
    return this.httpClient.get(this.apirole + 'get')
  }
}
