import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { AdminService } from '../../service/admin.service';


@Component({
  selector: 'app-add-user-by-role',
  templateUrl: './add-user-by-role.component.html',
  styleUrls: ['./add-user-by-role.component.css']
})
export class AddUserByRoleComponent implements OnInit {
  user: User= new User();
  error: any = {};

  constructor(private adminService: AdminService,private router: Router) { }

  ngOnInit(): void {
  }
  registerSubmit(){
    this.adminService.registeruser(this.user).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.router.navigate(['/admin']);
    },
    (err)=>{
      this.error=err.error;
      console.log(err);
    })
  }

}
