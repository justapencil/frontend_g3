import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 product: Product=new Product();
 error: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  updateProduct()
  {
    
  }
}
