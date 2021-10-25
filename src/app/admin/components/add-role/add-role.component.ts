import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user/models/user';
import { Role } from '../../models/role';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  role:Role = new Role();
  error: any = {};
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }
createRole(){
  this.adminService.register(this.role).subscribe(
    (response) =>{
      console.log(JSON.stringify(response));
      this.router.navigate(['/admin']);
    },
    (err) =>{
      this.error=err.error;
      console.log(err);
    }
  );

}

}

