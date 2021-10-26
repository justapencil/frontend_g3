import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from '../../models/inventory';
import { CatalogService } from '../../service/catalog.service';
import { InventoryService } from '../../service/inventory.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  inventory: Inventory= new Inventory();
  error: any = {};
  product: any = {};
  productname: string;
  id: any;
  constructor(private inventoryService: InventoryService,private catalogService: CatalogService,private router: Router) { }

  ngOnInit(): void {
    console.log(history.state.name);
    this.catalogService.getcatalogById(history.state.name).subscribe((response)=>{
       this.product=JSON.parse(JSON.stringify(response));
       this.productname=this.product.productName;
    })
  }
  addInventory()
  {
    this.id = JSON.parse(localStorage.getItem('userdetails')).userId; 
    this.inventory.productId=history.state.name;
    this.inventory.userId=this.id;
    this.inventoryService.addInventory(this.inventory).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.router.navigate(['/supplier']);
    })
  }
}
