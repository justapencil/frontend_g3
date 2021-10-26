import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
 api: string = '/api/inventory/'

  constructor(private httpClient: HttpClient) { }

  addInventory(inventory: Inventory): Observable<any> {
    return this.httpClient.post(this.api + '/add', inventory);
  }
  getInventory(): Observable<any> {
    return this.httpClient.get(this.api + '/get');
  }
}
