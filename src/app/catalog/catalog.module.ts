import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateComponent } from './components/update/update.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from '../admin/service/admin.service';
import { CatalogService } from './service/catalog.service';
import { CategoryService } from './service/category.service';


@NgModule({
  declarations: [
    DashboardComponent,
    UpdateComponent,
    AddCategoryComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,SharedModule,FormsModule,HttpClientModule,
    CatalogRoutingModule
  ],providers: [CatalogService,CategoryService]
})
export class CatalogModule { }
