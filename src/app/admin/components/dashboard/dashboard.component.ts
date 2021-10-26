import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: any;
  Roles: any;
  error: any= {};
  constructor(private adminService: AdminService,private router: Router) { 
    this.adminService.getrole().subscribe((response)=>
    {
      console.log(JSON.parse(JSON.stringify(response)))
     this.Roles=JSON.parse(JSON.stringify(response));
    });
  }

  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('userdetails')).userName; 
  }


}
