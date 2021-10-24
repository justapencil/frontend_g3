import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { AddUserByRoleComponent } from './components/add-user-by-role/add-user-by-role.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'add-role',
    component: AddRoleComponent
  },
  {
    path: 'add-user-',
    component: AddRoleComponent
  },
  {
    path: 'role/create-user',
    component: AddUserByRoleComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
