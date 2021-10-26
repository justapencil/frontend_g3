import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category = new Category();
  error:any = {};

  constructor(private router: Router,private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  createCategory()
  {
    this.categoryService.addcategories(this.category).subscribe((response)=>
    {
      console.log(JSON.stringify(response));
      this.router.navigate(['/catalog']);
    },(err)=>{
      this.error=err.error;
    })
  }
}
