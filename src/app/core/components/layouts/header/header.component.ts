import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rolename:any= {};
  username:any= {};
  constructor() { }

  ngOnInit(): void {
    this.rolename = JSON.parse(localStorage.getItem('userdetails')).role.roleName; 
    this.username = JSON.parse(localStorage.getItem('userdetails')).userName; 
  }
  
}
