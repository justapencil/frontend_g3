import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:any = {};
error:any = {};

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {

  }
  loginSubmit(){

    this.userService.login(this.login.email,this.login.password).subscribe((response) =>{
      localStorage.setItem('token',response.token);
      localStorage.setItem('Userdetails',JSON.stringify(jwt_decode(response.token)));                                                                       
    })
  }

}
