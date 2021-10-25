import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

user: User = new User();
error: any ={};



  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    {
       
    }
  }
  registerSubmit(){
    console.log(JSON.stringify(this.user));
    this.userService.register(this.user).subscribe(
      (response) =>{
        console.log(JSON.stringify(response));
        this.router.navigate(['/user/login']);
      },
      (err) =>{
        this.error=err.error;
        console.log(err);
      }
    )
  }

}
