import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../models/inventory';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  inventory: Inventory= new Inventory();
  error: any = {};

  constructor() { }

  ngOnInit(): void {
  }
  addInventory()
  {}
}
