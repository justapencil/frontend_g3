
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Catalog } from '../../models/catalog';
import { CatalogService } from '../../service/catalog.service';
import { CategoryService } from '../../service/category.service';



@Component({

  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  catalog: Catalog= new Catalog();
  error: any = {};
  Catalogs: any = {};
  categories: any = {};
  constructor(private catalogservice: CatalogService,private router: Router, private categoryService: CategoryService) { 
    // this.catalogservice.getcatalog().subscribe((response)=>
    // {
    //   this.Catalogs=JSON.parse(JSON.stringify(response));
    // },(err)=>
    // {
    //   this.error=err.error;
    // })
    this.categoryService.getcategory().subscribe((response)=>
    {
      this.categories=JSON.parse(JSON.stringify(response));
    },
    (err)=>{
      this.error=err.error;
    }
  
    )
  }

  ngOnInit(): void {
  }
  createProduct()
  {
    this.catalogservice.addcatalog(this.catalog).subscribe((response)=>
    {
      console.log(JSON.stringify(response));
      this.router.navigate(['/catalog']);
    })
  }
}
