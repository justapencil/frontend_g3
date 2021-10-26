import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from '../../service/catalog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: any;
  catalogs:any={}
  constructor(private catalogService: CatalogService,private router: Router) { 

    this.catalogService.getCatalog().subscribe((response)=>{
      console.log(JSON.parse(JSON.stringify(response)))
      this.catalogs=JSON.parse(JSON.stringify(response));
    })
  }

  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('userdetails')).userName; 
  }

}
