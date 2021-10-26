import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  api:string = '/api/catalog/'

  constructor(private httpClient: HttpClient) {
   }

   getCatalog(): Observable<any> {
     return this.httpClient.get(this.api+ 'get');
   }
   getcatalogById(Id:string): Observable<any>{
     return this.httpClient.get(this.api+ 'getById?id='+Id);
   } 
}
