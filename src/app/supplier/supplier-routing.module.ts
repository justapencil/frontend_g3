import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedDetailsComponent } from './components/completed-details/completed-details.component';
import { CompletedComponent } from './components/completed/completed.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { PendingDetailsComponent } from './components/pending-details/pending-details.component';
import { PendingComponent } from './components/pending/pending.component';
import { SellComponent } from './components/sell/sell.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path:'orders/status-pending',
    component: PendingComponent
  },
  {
    path:'inventory',
    component: InventoryComponent
  },
  {
    path:'orders/pending/view',
    component: PendingDetailsComponent
  },
  {
    path:'orders/status-completed',
    component: CompletedComponent
  },
  {
    path:'inventory/update',
    component: UpdateComponent
  },
  {
    path:'orders/status-pending/view',
    component: PendingDetailsComponent
  },
  {
    path:'sell',
    component: SellComponent
  },
  {
    path:'orders/status-completed/view', 
    component: CompletedDetailsComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
