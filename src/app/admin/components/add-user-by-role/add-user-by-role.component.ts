import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-add-user-by-role',
  templateUrl: './add-user-by-role.component.html',
  styleUrls: ['./add-user-by-role.component.css']
})
export class AddUserByRoleComponent implements OnInit {
  user: User= new User();
  error: any = {};

  constructor() { }

  ngOnInit(): void {
  }
  registerSubmit(){
    
  }

}
