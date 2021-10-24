import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/models/user';
import { Role } from '../../models/role';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  role:Role = new Role();
  error: any = {};
  constructor() { }

  ngOnInit(): void {
  }
createRole(){}

}

