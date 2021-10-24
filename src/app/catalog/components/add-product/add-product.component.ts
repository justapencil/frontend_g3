import { Component, OnInit } from '@angular/core';
import { Catalog } from '../../models/catalog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  catalog: Catalog= new Catalog();
  error: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  createProduct()
  {}
}
