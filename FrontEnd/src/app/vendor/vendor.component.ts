import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllRestaurantsService } from '../all-restaurants.service';
import { HomepageComponent } from '../homepage/homepage.component';
import { JwtService } from '../jwt.service';
import { UpdateMyRestroComponent } from '../update-my-restro/update-my-restro.component';
import { VendorOrdersComponent } from '../vendor-orders/vendor-orders.component';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(private homeComp:HomepageComponent,private vendorService:VendorService,private jwtService:JwtService,private matDialog:MatDialog,private allRestroservice:AllRestaurantsService) {
    this.homeComp.hider();
    this.homeComp.getLogInStatus();
    this.homeComp.vendorLogInCheck();
    this.getAllMyRestaurant()
   }

  ngOnInit(): void {
  }

  allMyrestroData:any;

  token:any;
  emailId:any;
  tokendata:any;
 
   

  getAllMyRestaurant(){
    this.token=localStorage.getItem('jwt');
    this.tokendata=this.jwtService.DecodeToken(this.token);
    console.log(this.tokendata);
    this.emailId=this.tokendata.userObject.emailId;
    console.log(this.emailId);
    this.vendorService.getMyRestros(this.emailId).subscribe(
      resp=>{
        this.allMyrestroData=resp;
        console.log(this.allMyrestroData)
      }
    )
  }

  edit(gstNo:any){
    this.vendorService.vendorGstNo=gstNo;
    this.matDialog.open(UpdateMyRestroComponent,
      {
        width:"50%",
        disableClose:true
      })
  }

  
  displayOrder(gstNo:any){
    this.vendorService.vendorGstNo=gstNo;
    this.matDialog.open(VendorOrdersComponent,
      {
        width:"50%",
        disableClose:true
      })
  }

  
}
