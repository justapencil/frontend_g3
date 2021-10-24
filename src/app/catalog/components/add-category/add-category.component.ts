import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category = new Category();
  error:any = {};

  constructor() { }

  ngOnInit(): void {
  }
  createCategory()
  {

  }
}
