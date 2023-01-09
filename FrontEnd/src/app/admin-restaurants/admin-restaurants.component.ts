import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-restaurants',
  templateUrl: './admin-restaurants.component.html',
  styleUrls: ['./admin-restaurants.component.css']
})
export class AdminRestaurantsComponent implements OnInit {

  constructor(private adminservice:AdminService) {
    this. getAllRestros();
   }

  ngOnInit(): void {
  }

  allRestros:any;

  getAllRestros(){
    this.adminservice.getAllRestaurants().subscribe(
      resp=>{
        this.allRestros=resp;
        console.log(this.allRestros);
        
      }
    )
  }

  displayedColumns: string[] = ['gstNo', 'restroName', 'emailId', 'restroAddress','cuisine','openTime','closeTime','restroPhone'];

}
