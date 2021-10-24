import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  call(){
    document.getElementById("add-to-cart").innerHTML = "Go to Cart";
    document.getElementById("add-to-cart").style.background = "green";

  }
}
