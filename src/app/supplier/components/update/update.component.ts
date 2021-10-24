import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../models/inventory';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  inventory: Inventory= new Inventory();
  error: any= {};
  constructor() { }

  ngOnInit(): void {
  }
  updateInventory()
  {
    
  }


}
