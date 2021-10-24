import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmsRoutingModule } from './oms-routing.module';
import { OmsDetailsComponent } from './components/oms-details/oms-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    OmsDetailsComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    OmsRoutingModule
  ]
})
export class OmsModule { }
