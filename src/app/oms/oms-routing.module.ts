import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OmsDetailsComponent } from './components/oms-details/oms-details.component';

const routes: Routes = [

  {
    path: '',
    component:DashboardComponent
  },
  {
    path: 'view',
    component: OmsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmsRoutingModule { }
