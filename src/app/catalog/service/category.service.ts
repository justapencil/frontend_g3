import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  api:String = '/api/category/'
  constructor(private httpClient: HttpClient) { }
  getcategory(): Observable<any> {
    return this.httpClient.get(this.api + 'get');
  }
  addcategories(category: Category): Observable<any> {
    return this.httpClient.post(this.api+'add',category);
  }
}
