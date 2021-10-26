import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalog } from '../models/catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  api:String='/api/catalog/';
  constructor(private httpclient: HttpClient) { }

  getcatalog(): Observable<any> {
    return this.httpclient.get(this.api + 'get')
  }
  addcatalog(catalog: Catalog): Observable<any> {
    return this.httpclient.post(this.api + 'add', catalog)
  }

}
