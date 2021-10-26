import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rolename:any= {};
  username:any= {};
  status:any= {};
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.rolename = JSON.parse(localStorage.getItem('userdetails')).role.roleName; 
    this.status= JSON.parse(localStorage.getItem('userdetails'));
   console.log(this.status);
  }
  logout(){
    localStorage.setItem('userdetails', null);
    this.router.navigate(['/'])
  }
  
}
