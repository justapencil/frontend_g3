import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import jwt_decode from 'jwt-decode'
import validateToken from 'src/app/utils/validateToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:any = {};
error:any = {};
userdetails:any = {};
  constructor(private userService: UserService,private router: Router) { }

  rolename:any = {};
  ngOnInit(): void {

  }
  loginSubmit(){

    this.userService.login(this.login.email,this.login.password).subscribe((response) =>{
      console.log(JSON.stringify(response));

      localStorage.setItem('userdetails',JSON.stringify(response));
      localStorage.setItem('status','online');
      // localStorage.setItem('Userdetails',JSON.stringify(jwt_decode(response.token)));  
      // if(validateToken())
      // {
      //   
      //   console.log(this.rolename)
      //  
      // } 
      this.rolename = JSON.parse(localStorage.getItem('userdetails')).role.roleName;  
      console.log("object")
      if(this.rolename=='Admin')
        {
          console.log("object")
        this.router.navigate(['/admin']);
         }
         else if(this.rolename=='Catalog-Admin')
         {
           this.router.navigate(['/catalog']);
         }
         else if(this.rolename=='Oms-Admin')
         {
           this.router.navigate(['/oms'])
         }
         else if(this.rolename=='Supplier')
         {
           this.router.navigate(['/supplier']);
         }
         else {
           this.router.navigate(['/online']);
         }
    },
    (err) => {
      this.error = err.error;
      console.log(JSON.stringify(err));
    });
  }

}
