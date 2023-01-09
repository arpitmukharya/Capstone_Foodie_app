import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private adminservice:AdminService) { 
    this.getAllUsers();
  }

  ngOnInit(): void {
  }
  allUsers:any;

  getAllUsers(){
    this.adminservice.getAllUsers().subscribe(
      resp=>{
        this.allUsers=resp;
        console.log(this.allUsers);
      }
    )
  }

  displayedColumns: string[] = ['firstName', 'lastName', 'emailId', 'address','mobileNo','userName','role','password'];

}
