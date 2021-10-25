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
  constructor(private httpClient:HttpClient) { }
  register(role: Role): Observable<any> {
    return this.httpClient.post(this.api + 'add', role); 
  }
  registeruser(user: User): Observable<any> {
    return this.httpClient.post(this.api + 'add', user); 
  }
}
