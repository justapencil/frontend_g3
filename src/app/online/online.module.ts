import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineRoutingModule } from './online-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ViewComponent } from './components/view/view.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    
    ViewComponent,
    CartComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,HttpClientModule,FormsModule,
    SharedModule,
    OnlineRoutingModule
  ]
})
export class OnlineModule { }
